import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { ModulesComplementairesRoutingModule } from './modules-complementaires-routing.module';
import { ModulesComplementairesComponent } from './modules-complementaires.component';
import { HeaderComponent } from './header/header.component';
import { MenuModule } from '../layout/menu/menu.module';
import { CreateModuleComponent } from './create-module/create-module.component';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    AngularFontAwesomeModule,
    ModulesComplementairesRoutingModule,
    MenuModule,
    CreateModuleComponent,
  ],
  declarations: [
  	ModulesComplementairesComponent,
  	HeaderComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class ModulesComplementairesModule { }
