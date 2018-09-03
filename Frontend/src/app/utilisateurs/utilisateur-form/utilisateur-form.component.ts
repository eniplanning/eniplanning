import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ROLES } from '../../utils/role';
import { Router } from '@angular/router';
import { RegisterService } from '../../utils/services/register.service';
import { UserService } from '../../utils/services/user.service';
import { User} from '../../utils/models/user';

@Component({
  selector: 'app-utilisateur-form',
  templateUrl: './utilisateur-form.component.html',
  styleUrls: ['./utilisateur-form.component.scss']
})

export class UtilisateurFormComponent implements OnInit {
  @Output() closed = new EventEmitter<string>();

  roles = ROLES;
  confirm_password: string = null;
  showPasswordForm: boolean = false;
  showResetButton: boolean = false;
  showForm:boolean = true;
  disabledPasswordButton:boolean = false;
  @Input() selectedUser: User;
  @Input() action: string;
  @Input() showPasswordButton: boolean;

  public confirmMsg = null;
  public errorMsg = null;
  public error = [] ;

  constructor(
    private registerService : RegisterService,
    private userService : UserService,
    private router: Router,
  ) { }

  // A la fermeture de la modal, envoi d'un message pour raffraichissement de la liste
  sendMessage(){
    this.closed.emit();
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

  // Récupération des données en cas d'annulation des modifications
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
}