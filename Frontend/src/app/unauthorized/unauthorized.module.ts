import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { UnauthorizedRoutingModule } from './unauthorized-routing.module';
import { UnauthorizedComponent } from './unauthorized.component';
import { HeaderComponent } from './header/header.component';
import { MenuModule } from '../layout/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    AngularFontAwesomeModule,
    UnauthorizedRoutingModule,
    MenuModule,
  ],
  declarations: [
  	UnauthorizedComponent,
  	HeaderComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class UnauthorizedModule { }
