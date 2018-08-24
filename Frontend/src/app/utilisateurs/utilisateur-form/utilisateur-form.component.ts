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
  @Input() selectedUser: User;
  @Input() action: string;

  public form = {
    email: null,
    name: null,
    firstname: null,
    role_id: null,
    password: null,
    password_confirmation: null  
  };

  public confirmMsg = null;
  public errorMsg = null;
  public error = [] ;

  constructor(
    private registerService : RegisterService,
    private userService : UserService,
    private router: Router,
  ) { }

  sendMessage(){
    this.closed.emit();
  }

  onSubmit() {
    this.error = [];  
    if(this.action == 'Créer') {
      this.createUser();
    } else {
      this.updateUser();
    }
  }


  ngOnInit() {
    if (this.selectedUser == null) {
      this.selectedUser = new User();
    }
  }
  
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

  updateUser() {
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

  handleError(error) {
    this.confirmMsg = null;
    if (error.status == '500') {
      this.errorMsg = "Echec de connexion au serveur. Veuillez contacter l'administrateur du site !";
    } else {
      this.error=error.error.errors; 
    }
  }
}