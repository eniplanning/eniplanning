import { Component, OnInit } from '@angular/core';
import { User } from '../utils/models/user';
import { UserService } from '../utils/services/user.service';
import { ROLES } from '../utils/role';
import { ResolveStart } from '@angular/router';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent implements OnInit {

  users: User[];
  selectedUser: User;
  roles = ROLES;
  currentUser: String;
  
  constructor(
    private userService: UserService,
  ) { } 

  ngOnInit() {
    this.getUsers();
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
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
  
  changeStatus(user, is_active) {
    user.is_active = (is_active == '1' ? false : true);
    this.userService.updateUser(user).subscribe(
      data=>{
        console.log(data);
      },
      error=>{ 
        console.log(error);
      }
    );
  }
}
