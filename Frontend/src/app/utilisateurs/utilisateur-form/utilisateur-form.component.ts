import { Component, OnInit } from '@angular/core';
import { ROLES } from '../../utils/role';
import { Router } from '@angular/router';
import { RegisterService } from '../../utils/services/register.service';

@Component({
  selector: 'app-utilisateur-form',
  templateUrl: './utilisateur-form.component.html',
  styleUrls: ['./utilisateur-form.component.scss']
})

export class UtilisateurFormComponent implements OnInit {

  roles = ROLES;
  action: string;

  public form = {
    email: null,
    name: null,
    firstname: null,
    role_id: null,
    password: null,
    password_confirmation: null
  };

  public confirmMsg = null;
  public error = [] ;

  constructor(
    private registerService : RegisterService,
    private router: Router,
  ) { }

  onSubmit() {
    //console.log(this.form);
    return this.registerService.store(this.form).subscribe(
      data=>{
        //console.log(data);
        this.confirm(this.form);
        this.router.navigateByUrl('/admin/utilisateurs');

      },
      error=>{
        //console.log(error);
        this.error = error.error.errors;
      }
    );
  }

  confirm(form) {
    this.confirmMsg = "Utilisateur enregistré avec succès";
    this.error = [];
    this.form.email = null;
    this.form.name = null;
    this.form.firstname = null;
    this.form.role_id = null;
    this.form.password = null;
    this.form.password_confirmation = null;
  }

  ngOnInit() {
  }
}