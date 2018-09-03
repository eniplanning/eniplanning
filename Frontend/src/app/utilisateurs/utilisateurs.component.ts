import { Component, OnInit } from '@angular/core';
import { User } from '../utils/models/user';
import { UserService } from '../utils/services/user.service';
import { ROLES } from '../utils/role';
import { CONFIG } from '../utils/config';

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

  constructor(
    private userService: UserService
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
          this.users = data;
        },
        error => {
          console.log(error);
        }
      );
  }

  // Changement du statut d'un utilisateur (actif ou non)
 changeStatus(user: User, is_active) {
    console.log(user);
    user.is_active = (is_active == 1 ? 0 : 1);
    return this.userService.updateUser(user).subscribe(
      data=>{
        console.log(data);
      },
      error=>{ 
        console.log(error);
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

}
