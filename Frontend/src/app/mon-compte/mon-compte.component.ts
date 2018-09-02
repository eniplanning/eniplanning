import { Component, OnInit } from '@angular/core';
import { UserService } from '../utils/services/user.service';
import { User } from '../utils/models/user';
import { ROLES } from '../utils/role';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.scss']
})
export class MonCompteComponent implements OnInit {

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
        data=>{
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

  // Raffraichir l'affichage après modification
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
      data=>{
        console.log(data);
        this.error = [];
        this.user = data;
      },
      error=>{
        this.error = error;
      }
    );
  }
}
