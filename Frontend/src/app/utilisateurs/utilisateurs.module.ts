import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UtilisateursRoutingModule } from './utilisateurs-routing.module';

import { UtilisateursComponent } from './utilisateurs.component';
import { HeaderComponent } from './header/header.component';
import { MenuModule } from '../layout/menu/menu.module';
import { UtilisateurFormComponent } from './utilisateur-form/utilisateur-form.component';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    AngularFontAwesomeModule,
    FormsModule,
    UtilisateursRoutingModule,
    MenuModule
  ],
  declarations: [
  	UtilisateursComponent,
  	HeaderComponent,
  	UtilisateurFormComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class UtilisateursModule { }