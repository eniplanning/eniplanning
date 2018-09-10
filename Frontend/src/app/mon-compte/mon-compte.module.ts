import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { MonCompteRoutingModule } from './mon-compte-routing.module';
import { MonCompteComponent } from './mon-compte.component';
import { MenuModule } from '../layout/menu/menu.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    AngularFontAwesomeModule,
    MonCompteRoutingModule,
    MenuModule,
    FormsModule,
  ],
  declarations: [
  	MonCompteComponent,
    HeaderComponent,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class MonCompteModule { }
