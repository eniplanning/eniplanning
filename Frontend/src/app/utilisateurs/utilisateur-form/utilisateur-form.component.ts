import { Component, OnInit } from '@angular/core';
import { ROLES } from '../../utils/role';
import { LoginService } from '../../utils/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utilisateur-form',
  templateUrl: './utilisateur-form.component.html',
  styleUrls: ['./utilisateur-form.component.scss']
})

export class UtilisateurFormComponent implements OnInit {

  roles = ROLES;

  public form = {
    email: null,
    name: null,
    firstname: null,
    role_id: null,
    password: null,
    password_confirmation: null
  };

  public error = [] ;

  constructor(
    private loginService : LoginService,
    private router: Router,
  ) { }

  onSubmit() {
    //console.log(this.form);
    return this.loginService.store(this.form).subscribe(
      data=>{
        //console.log(data);
        this.router.navigateByUrl('/admin/utilisateurs');

      },
      error=>{
        console.log(error);
        this.error = error.error.errors;
      }
    );
  }

  ngOnInit() {
  }
}