import { Component, OnInit } from '@angular/core';
import { UserService } from '../utils/services/user.service';
import { ActivityLogService } from '../utils/services/activitylog.service';
import { User } from '../utils/models/user';
import { ActivityLog } from '../utils/models/activitylog';
import { ROLES } from '../utils/role';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.scss']
})
export class MonCompteComponent implements OnInit {

  activityLog: ActivityLog;
  confirmMsg :string ='';
  errorMsg :string ='';
  showCompteForm: boolean= false;
  showMdpForm: boolean= false;
  showSubmitForm: boolean= false;
  roles = ROLES;
  currentUser: User;
  user: User;
  editMdp: boolean;
  editCompte: boolean;
  error = [] ;

  constructor(
    private userService : UserService,
    private activityLogService: ActivityLogService,
  ) { }

  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
    this.user = this.currentUser;
    this.showCompteForm = true;
    this.showMdpForm = false;
    this.showSubmitForm = false;
    this.editMdp = false;
    this.editCompte = false;
  }

  // Valider les données du formulaire
  onSubmit(){
    if(this.editCompte) {
      return this.userService.updateUser(this.user).subscribe(
        (data: User) => {
          this.confirmMsg = 'Votre compte a été modifié avec succès.'
          this.userService.setUser(data);
          this.currentUser = JSON.parse(sessionStorage.getItem('user')); 
          this.refresh();
        },
        error=>{ 
          this.confirmMsg = null;
          this.errorMsg = error;
          console.log(error);
        }
      );
    } else if (this.editMdp) {
        return this.userService.updateUserPassword(this.user).subscribe(
        data=>{
          this.confirmMsg = 'Votre mot de passe a été modifié avec succès.'
          this.currentUser = JSON.parse(sessionStorage.getItem('user')); 
          this.refresh();
        },
        error=>{ 
          this.confirmMsg = null;
          this.error=error.error.errors; 
          console.log(error);
        }
      );
    }
    this.createActivityLog("Modification");
  }

  // Modifier l'affichage à la demadne de changement du mot de passe
  receiveChangeMdp($event) {
    this.confirmMsg = null;
    this.errorMsg = null;
    this.editMdp = true;
    this.showMdpForm = true;
    this.editCompte = false;
    this.showCompteForm = false;
    this.showSubmitForm = true;
  }

  // Modifier l'affichage à la demadne de changement du compte
  receiveChangeCompte($event) {
    this.confirmMsg = null;
    this.errorMsg = null;
    this.editMdp = false;
    this.showMdpForm = false;
    this.editCompte = true;
    this.showCompteForm = true;
    this.showSubmitForm = true;
  }

  // Raffraichissement des données après modification
  refresh() {
    this.errorMsg = null;
    this.editMdp = false;
    this.showMdpForm = false;
    this.editCompte = false;
    this.showCompteForm = true;
    this.showSubmitForm = false;
    this.resetInformationsCompte();
  }

  // Récupération des données en cas d'annulation des modifications
  resetInformationsCompte() {
    this.userService.getUser(this.currentUser.id).subscribe(
      (data: User) => {
        console.log(data);
        this.error = [];
        this.user = data;
      },
      error=>{
        this.error = error;
      }
    );
  }
  // Journalisation de l'activité
  createActivityLog(action: string) {
    this.activityLog = new ActivityLog();
    this.activityLog.log_name = sessionStorage.getItem('name')+ ' '+ sessionStorage.getItem('firstname');
    this.activityLog.description = this.currentUser.email;
    this.activityLog.subject_id=null;
    this.activityLog.subject_type=action;
    this.activityLog.causer_id= JSON.parse(sessionStorage.getItem('user')).id;
    this.activityLog.causer_type='Mon compte';
    this.activityLog.properties=(new Date()).toDateString();
    this.activityLogService.storeActivityLog(this.activityLog).subscribe(
      data => console.log("log d'activité enregistré"), 
      error => console.log("erreur d'enregistrement du log d'activité: "+ error)
    );
    this.activityLog = null;
  }
}

