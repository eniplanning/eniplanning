import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../utils/services/login.service';
import { UserService } from '../../utils/services/user.service';
import { TokenService } from '../../utils/services/token.service';
import { Router } from '@angular/router';
import { User } from '../../utils/models/user';

@Component({
  selector: 'mon-compte-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

   loggedIn: boolean;
   loggedUser: User;

  constructor(
    private login:          LoginService,
    private router:         Router,
    private loginService:   LoginService,
    private userService:    UserService,
    private tokenService:   TokenService,
  ) { }

  ngOnInit(  ) {
     this.loggedIn = this.login.getStatus() ? true : false;
     this.loggedUser = JSON.parse(localStorage.getItem('user'));
  } 

    
  logout(event: MouseEvent) {
    event.preventDefault();
    this.loginService.changeAuthStatus(false);
    this.userService.unsetUser();
    this.tokenService.remove();
    this.router.navigateByUrl('/login');
  }
}
