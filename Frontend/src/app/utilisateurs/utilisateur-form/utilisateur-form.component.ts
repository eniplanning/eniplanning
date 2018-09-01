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
    if(this.action == 'Créer') {
      this.createUser();
    } else {
      this.updateUser();
    }
  }

  // Afficher ou masquer le formulaire du password
  changePassword(change: boolean) {
    this.showPasswordForm = change;
  }

  ngOnInit() {
    if (this.action == 'Créer') {
      this.showPasswordForm = true;
    }
    if (this.selectedUser == null) {
      this.selectedUser = new User();
    }
  }
  
  // Créer un utilisateur
  createUser() {
    console.log(this.selectedUser);
    return this.registerService.store(this.selectedUser).subscribe(
      data=>{
        this.confirmMsg = "Utilisateur enregistré avec succès";
        console.log(data);
        this.selectedUser = new User();
        this.error = [];
      },
      error=>{
        this.handleError(error);
      }
    );
  }

  // Modifier un utilisateur
  updateUser() {
    console.log(this.selectedUser);
    return this.userService.updateUser(this.selectedUser).subscribe(
      data=>{
        this.confirmMsg = "Modifications enregistrées";
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