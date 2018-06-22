import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { PlanningsEnDefautRoutingModule } from './plannings-en-defaut-routing.module';
import { PlanningsEnDefautComponent } from './plannings-en-defaut.component';
import { HeaderComponent } from './header/header.component';
import { MenuModule } from '../layout/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    AngularFontAwesomeModule,
    PlanningsEnDefautRoutingModule,
    MenuModule
  ],
  declarations: [
  	PlanningsEnDefautComponent,
  	HeaderComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class PlanningsEnDefautModule { }
