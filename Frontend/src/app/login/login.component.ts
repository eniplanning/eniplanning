import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../utils/services/login.service';
import { TokenService } from '../utils/services/token.service';
import { UserService } from '../utils/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password:null
  };

  public error = null;

  constructor(
    private loginService: LoginService,
    private tokenService: TokenService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
  
  }

  onSubmit(){
    console.log(this.form);
    return this.loginService.login(this.form).subscribe(
      data=>{
        //console.log(data);
        this.handleResponse(data);
      },
      error=>{
        //console.log(error);
        if (error.status == '0') {
          this.error = "Echec de connexion au serveur. Veuillez contacter l'administrateur du site !";
        } else {
          this.error=error.error.error;
        }
      }
    );
  }

  
  handleResponse(data) {
    this.tokenService.handleToken(data.access_token);
    this.userService.handleUser(data.user_id);
    this.loginService.changeAuthStatus(true);
    this.router.navigateByUrl('/planning');
  }
}