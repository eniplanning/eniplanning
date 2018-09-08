import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LoginService } from '../utils/services/login.service';
import { TokenService } from '../utils/services/token.service';
import { UserService } from '../utils/services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { User } from '../utils/models/user';
import { ActivityLog } from '../utils/models/activitylog';
import { ActivityLogService } from '../utils/services/activitylog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  activityLog:ActivityLog = null;
  currentUser: User;

  public form = {
    email: null,
    password:null
  };

  public error = null;

  constructor(
    private loginService: LoginService,
    private tokenService: TokenService,
    private userService: UserService,
    private cookieService: CookieService,
    private router: Router,
    private activityLogService: ActivityLogService,
    private datePipe: DatePipe,
  ) { }

  ngOnInit() {
    this.form.email = this.cookieService.get('user_email');
  }

  // vérification des informations du formulaire
  onSubmit(){
    this.cookieService.set('user_email', this.form.email);
    return this.loginService.login(this.form).subscribe(
      data => {
        this.handleResponse(data);
      },
      error => {
        if (error.status == '0') {
          this.error = "Echec de connexion au serveur. Veuillez contacter l'administrateur du site !";
        } else {
          this.error=error.error.error;
        }
        this.createActivityLog('Echec de connexion', false);
      }
    );
  }

  // traitement de la réponse
  handleResponse(data) { 
    if (data.user_is_active == true) {
      this.tokenService.handleToken(data.access_token);
      this.userService.getUser(data.user_id).subscribe(
        (data: User) => {
          this.currentUser = data;
          this.userService.setUser(this.currentUser);
          this.loginService.changeAuthStatus(true);
          this.createActivityLog('Connexion réussie', true);
          this.router.navigateByUrl('/planning');
        },
        error => {
          if (error.status == '0') {
            this.error = "Echec de connexion au serveur. Veuillez contacter l'administrateur du site !";
          } else {
            this.error=error.error.error;
          }
        }
      );
    } else {
      this.error = "Vous n'êtes pas autorisé à accéder à l'application. Veuillez contacter l'administrateur du site pour qu'il active votre compte !";
    }
  }

  // Journalisation de l'activité
  createActivityLog(action: string, result:boolean) {
    this.activityLog = new ActivityLog();
    this.activityLog.log_name = (result ? (this.currentUser.name+ ' '+ this.currentUser.firstname) : 'non connecté');
    this.activityLog.description = this.form.email;
    this.activityLog.subject_id=null;
    this.activityLog.subject_type=action;
    this.activityLog.causer_id= (result ? (JSON.parse(sessionStorage.getItem('user')).id) : 0);
    this.activityLog.causer_type='Login';
    var date = new Date();
    this.activityLog.properties= this.datePipe.transform(new Date(),"yyyy-MM-dd HH:mm", 'fr-Fr');
    this.activityLogService.storeActivityLog(this.activityLog).subscribe(
      data => console.log("log d'activité enregistré"), 
      error => console.log("erreur d'enregistrement du log d'activité: "+ error)
    );
    this.activityLog = null;
  }
}