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
  
  constructor(
    private userService: UserService,
  ) { } 

  ngOnInit() {
    this.getUsers();
  }

  // Récupération des Utilisateurs depuis le service : user
	getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }
    
  edit(user) {
    
  }
  
  changeStatus(user, is_active) {
    user.is_active = !is_active;
    this.userService.updateUser(user);
  }
}
