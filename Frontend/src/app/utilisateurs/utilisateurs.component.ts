import { Component, OnInit } from '@angular/core';
import { User } from '../utils/models/user';
import { UserService } from '../utils/services/user.service';
import { ROLES } from '../utils/role';
import { CONFIG } from '../utils/config';
import { ActivityLog } from '../utils/models/activitylog';
import { ActivityLogService } from '../utils/services/activitylog.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent implements OnInit {

  admin :string = CONFIG.email_administrateur;
  users: User[];
  selectedUser: User;
  roles = ROLES;
  currentUser: String;
  private sorted = false;
  searchValue: string;
  activityLog: ActivityLog;
  errorMsg : string =null;

  constructor(
    private userService: UserService,
    private activityLogService: ActivityLogService,
    private datePipe: DatePipe,
  ) { } 

  ngOnInit() {
    this.getUsers();
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
  }

  // Filtrer les utilisateurs lors de la recherche (par nom)
  filterUser(datas, value) {
    return datas.filter(singleItem => singleItem['name'].toLowerCase().includes(value.toLowerCase()));
  }

  // Rechercher automatiquement à la saisie d'un nom
  search() {
    if (!this.searchValue) {
      return this.users;
    }
    if (this.searchValue) {
      return this.filterUser(this.users, this.searchValue);
    }
  }

  // Récupération des Utilisateurs depuis le service : user
	getUsers() {
    return this.userService.getUsers().subscribe(
        data => {
          this.errorMsg = null;
          this.users = data;
        },
        error => {
          console.log('error', error);
          this.errorMsg=("Erreur de réponse du serveur, veuillez contacter l'administrateur.");
        },
        () => this.users.sort(function(a, b) {
          //custom sorting function, sorts by stagiaire.Nom in alphabetical order
          if (a.name < b.name)
            return -1;
          else if (a.name > b.name)
            return 1;
          return 0
        })
    );
  }

  // Changement du statut d'un utilisateur (actif ou non)
 changeStatus(user: User, is_active) {
    user.is_active = (is_active == 1 ? 0 : 1);
    return this.userService.updateUser(user).subscribe(
      data=>{
        this.errorMsg = null;
        this.createActivityLog((user.is_active ? 'Activer' : 'Désactiver'), user);
      },
      error=>{ 
        console.log('error changeStatus', error);
        this.errorMsg =("Le changement d'autorisation a échoué, en raison d'une erreur du serveur. Veuillez contacter l'administrateur.");
      }
    );
  }

  // Raffraichissement de la liste après modification d'un utilisateur
  refreshList(event){
    this.getUsers();  
  }

  // Tri des utilisateurs par type
  sortBy(key: string | any): void {

    this.users.sort((a: any, b: any) => {
      if (a[key] < b[key]) {
        return this.sorted ? 1 : -1;
      }
      if (a[key] > b[key]) {
        return this.sorted ? -1 : 1;
      }
      return 0;
    });
    this.sorted = !this.sorted;
  }

  // Journalisation de l'activité
  createActivityLog(action: string, user: User) {
    this.activityLog = new ActivityLog();
    this.activityLog.log_name = JSON.parse(sessionStorage.getItem('user')).name+ ' '+ JSON.parse(sessionStorage.getItem('user')).firstname;
    this.activityLog.description = user.email + ' : ' + user.firstname + ' ' + user.name;
    this.activityLog.subject_id=null;
    this.activityLog.subject_type=action;
    this.activityLog.causer_id=JSON.parse(sessionStorage.getItem('user')).id;
    this.activityLog.causer_type='Utilisateur';
    this.activityLog.properties= this.datePipe.transform(new Date(),"yyyy-MM-dd HH:mm", 'fr-Fr');
    this.activityLogService.storeActivityLog(this.activityLog).subscribe(
      data => console.log("log d'activité enregistré"), 
      error => console.log("erreur d'enregistrement du log d'activité: ", error)
    );
    this.activityLog = null;
  }
}
