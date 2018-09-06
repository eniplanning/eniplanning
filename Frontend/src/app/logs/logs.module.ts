import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { LogsRoutingModule } from './logs-routing.module';
import { LogsComponent } from './logs.component';
import { HeaderComponent } from './header/header.component';
import { MenuModule } from '../layout/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    AngularFontAwesomeModule,
    LogsRoutingModule,
    MenuModule,
    FormsModule,
  ],
  declarations: [
  	LogsComponent,
    HeaderComponent,
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class LogsModule { }
