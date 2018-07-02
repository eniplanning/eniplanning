import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../utils/services/login.service';
import { UserService } from '../../utils/services/user.service';
import { TokenService } from '../../utils/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'utilisateurs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router:         Router,
    private loginService:   LoginService,
    private userService:    UserService,
    private tokenService:   TokenService,
  ) { }

  ngOnInit() {
  } 

    
  logout(eventLogout: MouseEvent) {
    event.preventDefault();
    this.loginService.changeAuthStatus(false);
    this.userService.unsetUser();
    this.tokenService.remove();
    this.router.navigateByUrl('/login');
  }

  redirectToCreate(eventCreate: MouseEvent) {
    this.router.navigateByUrl('admin/utilisateurs/create')
  }
}
