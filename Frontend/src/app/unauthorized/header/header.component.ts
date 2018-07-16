import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../utils/services/login.service';
import { Router } from '@angular/router';
import { UserService } from '../../utils/services/user.service';
import { TokenService } from '../../utils/services/token.service';

@Component({
  selector: 'unauthorized-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username: string;
  constructor(
    private login: LoginService,
    private router: Router,
    private userService: UserService,
    private token: TokenService,
  ) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

    
  logout(eventLogout: MouseEvent) {
    event.preventDefault();
    this.login.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
    this.userService.unsetUser();
    this.token.remove();
  }

  redirectToMonCompte(eventCompte: MouseEvent) {
    this.router.navigateByUrl('/mon-compte');
  }
}
