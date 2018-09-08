import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ROLES } from '../../utils/role';
import { Router } from '@angular/router';
import { RegisterService } from '../../utils/services/register.service';
import { UserService } from '../../utils/services/user.service';
import { ActivityLogService } from '../../utils/services/activitylog.service';
import { User} from '../../utils/models/user';
import { ActivityLog } from '../../utils/models/activitylog';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-utilisateur-form',
  templateUrl: './utilisateur-form.component.html',
  styleUrls: ['./utilisateur-form.component.scss']
})

export class UtilisateurFormComponent implements OnInit {
  
  // A la fermeture de la modal, envoi d'un message pour raffraichissement de la liste
  @Output() closed = new EventEmitter<string>();
  sendMessage(){
    this.closed.emit();
  }

  
  roles = ROLES;
  confirm_password: string = null;
  showPasswordForm: boolean = false;
  showResetButton: boolean = false;
  showForm:boolean = true;
  disabledPasswordButton:boolean = false;
  activityLog : ActivityLog = null;
  @Input() selectedUser: User;
  @Input() action: string;
  @Input() showPasswordButton: boolean;

  public confirmMsg = null;
  public errorMsg = null;
  public error = [] ;

  constructor(
    private registerService : RegisterService,
    private userService : UserService,
    private activityLogService: ActivityLogService,
    private router: Router,
    private datePipe: DatePipe,
  ) { }

  ngOnInit() {
    if (this.action == 'Créer') {
      this.showPasswordForm = true;
      this.disabledPasswordButton = true;
      this.selectedUser = new User();
    } else if (this.action = 'Modifier') {
      this.disabledPasswordButton = false;
      this.showPasswordForm = false;
    }
    this.showResetButton = false; 
    this.confirmMsg = null;
    this.errorMsg = null;
  }


  // Validation du formulaire
  onSubmit() {
    this.error = [];  
    this.disabledPasswordButton=false;
    this.showResetButton = false;
    if(this.action == 'Créer') {
      this.createUser();
    } else {
      if (this.showForm) {
        this.updateUser();
      } else {
        this.updatePasswordUser();
      }
    }
    this.createActivityLog(this.action);
    this.showResetButton = false;
  }

  // Afficher ou masquer le formulaire du password
  changePassword(change: boolean) {
    this.showPasswordForm = change;
    this.showForm = !this.showPasswordForm;
    this.showResetButton = false;
    this.confirmMsg = null;
    this.errorMsg = null;
  }
  
  // Créer un utilisateur
  createUser() {
    console.log(this.selectedUser);
    return this.registerService.store(this.selectedUser).subscribe(
      data=>{
        this.confirmMsg = "Utilisateur enregistré avec succès.";
        console.log(data);
        this.selectedUser = new User();
        this.error = [];
      },
      error=>{
        this.handleError(error);
      }
    );
  }

  // Récupérer less données en cas d'annulation des modifications
  resetInformationsCompte() {
    this.userService.getUser(this.selectedUser.id).subscribe(
      (data: User) => {
        console.log(data);
        this.error = [];
        this.selectedUser = data;
      },
      error=>{
        this.handleError(error);
      }
    );
    this.showResetButton=false;
    this.showPasswordButton=true;
    this.disabledPasswordButton=false;
  }

  // Modifier un utilisateur
  updateUser() {
    console.log(this.selectedUser);
    return this.userService.updateUser(this.selectedUser).subscribe(
      data=>{
        this.confirmMsg = "Informations du compte mises à jour.";
        console.log(data);
      },
      error=>{ 
        this.handleError(error);
      }
    );
  }

  // Obliger l'enregistrement ou l'abandon si des modifications sont en cours
  onEdit() {
    if (this.action == 'Modifier') {
      this.disabledPasswordButton=true;
      this.showResetButton = true;
      this.showPasswordButton=false;
      console.log('edition en cours');
    }
  }

  // Modifier le mot de passe d'un utilisateur
  updatePasswordUser() {
    console.log(this.selectedUser);
    return this.userService.updateUserPassword(this.selectedUser).subscribe(
      data=>{
        this.confirmMsg = "Mot de passe mis à jour.";
        console.log(data);
      },
      error=>{ 
        this.handleError(error);
      }
    );
  }

  // Récupération des erreurs
  handleError(error) {
    this.confirmMsg = null;
    if (error.status == '500') {
      this.errorMsg = "Echec de connexion au serveur. Veuillez contacter l'administrateur du site !";
    } else {
      this.error=error.error.errors; 
    }
  }

  // Journalisation de l'activité
  createActivityLog(action: string) {
    this.activityLog = new ActivityLog();
    this.activityLog.log_name = JSON.parse(sessionStorage.getItem('user')).name+ ' '+ JSON.parse(sessionStorage.getItem('user')).firstname;
    this.activityLog.description = this.selectedUser.email+ ' ' +this.selectedUser.firstname + ' ' + this.selectedUser.name;
    this.activityLog.subject_id=null;
    this.activityLog.subject_type=action;
    this.activityLog.causer_id=JSON.parse(sessionStorage.getItem('user')).id;
    this.activityLog.causer_type='Utilisateur';
    this.activityLog.properties= this.datePipe.transform(new Date(),"yyyy-MM-dd HH:mm", 'fr-Fr');
    this.activityLogService.storeActivityLog(this.activityLog).subscribe(
      data => console.log("log d'activité enregistré"), 
      error => console.log("erreur d'enregistrement du log d'activité: "+ error)
    );
    this.activityLog = null;
  }
}