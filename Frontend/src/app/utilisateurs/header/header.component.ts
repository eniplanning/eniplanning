import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginService } from '../../utils/services/login.service';
import { UserService } from '../../utils/services/user.service';
import { TokenService } from '../../utils/services/token.service';
import { Router } from '@angular/router';
import { User } from '../../utils/models/user';
import { ClearsessionService } from '../../utils/services/clearsession.service';

@Component({
  selector: 'utilisateurs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
    // Raffraichir la liste
    @Output() refreshList = new EventEmitter<string>();
    sendMessage() {
      this.refreshList.emit();
    }

    loggedIn: boolean;
    loggedUser: User;

    constructor(
      private login: LoginService,
      private router: Router,
      private userService: UserService,
      private token: TokenService,
      private clearsessionService: ClearsessionService,
    ) {}

    ngOnInit() {
      this.loggedIn = this.login.getStatus() ? true : false;
      this.loggedUser = JSON.parse(sessionStorage.getItem('user'));
    }    

    logout(event: MouseEvent) {
      event.preventDefault();
      this.login.changeAuthStatus(false);
      this.router.navigateByUrl('/login');
      this.userService.unsetUser();
      this.token.remove();
      this.clearsessionService.run();
    }

  redirectToCreate(event: MouseEvent) {
    event.preventDefault();
    this.router.navigateByUrl('admin/utilisateurs/create');
  }
}
