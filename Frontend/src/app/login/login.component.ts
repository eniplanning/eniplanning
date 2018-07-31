import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../utils/services/login.service';
import { TokenService } from '../utils/services/token.service';
import { UserService } from '../utils/services/user.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password:null
  };

  public error = null;

  constructor(
    private loginService: LoginService,
    private tokenService: TokenService,
    private userService: UserService,
    private router: Router,
    private cookieService: CookieService,
  ) { }

  ngOnInit() {
    this.form.email = this.cookieService.get('user_email');
  }

  onSubmit(){
    this.cookieService.set('user_email', this.form.email);
    return this.loginService.login(this.form).subscribe(
      data=>{
        this.handleResponse(data);
      },
      error=>{
        if (error.status == '0') {
          this.error = "Echec de connexion au serveur. Veuillez contacter l'administrateur du site !";
        } else {
          this.error=error.error.error;
        }
      }
    );
  }

  handleResponse(data) {
    if (data.user_is_active == true) {
      this.tokenService.handleToken(data.access_token);
      this.userService.handleUser(data.user_id);
      this.loginService.changeAuthStatus(true);
      this.router.navigateByUrl('/planning');
    } else {
      this.error = "Vous n'êtes pas autorisé à accéder à l'application. Veuillez contacter l'administrateur du site pour qu'il active votre compte !";
    }
  }
}