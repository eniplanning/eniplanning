import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms'; 

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login.component';
import { LoginRoutingModule} from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    AngularFontAwesomeModule,
    LoginRoutingModule,
    FormsModule,
  ],
  declarations: [
    LoginComponent,
    HeaderComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})

export class LoginModule { }
