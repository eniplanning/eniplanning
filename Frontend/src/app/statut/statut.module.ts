import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { StatutRoutingModule } from './statut-routing.module';
import { StatutComponent } from './statut.component';
import { HeaderComponent } from './header/header.component';
import { MenuModule } from '../layout/menu/menu.module';

@NgModule({
  	imports: [
    	CommonModule,
    	MDBBootstrapModule.forRoot(),
    	AngularFontAwesomeModule,
    	StatutRoutingModule,
    	MenuModule
  	],
  	declarations: [
  		StatutComponent,
  		HeaderComponent
 	],
  	schemas: [ NO_ERRORS_SCHEMA ]
})
export class StatutModule { }
