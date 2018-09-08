import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { LogsRoutingModule } from './logs-routing.module';
import { LogsComponent } from './logs.component';
import { HeaderComponent } from './header/header.component';
import { MenuModule } from '../layout/menu/menu.module';
import { LogsPurgerComponent } from './logs-purger/logs-purger.component';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MAT_DATE_FORMATS } from '@angular/material';
import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    AngularFontAwesomeModule,
    LogsRoutingModule,
    MenuModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatMomentDateModule,
    NgbModule,
  ],
  declarations: [
  	LogsComponent,
    HeaderComponent,
    LogsPurgerComponent,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class LogsModule { }
