import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { ModelesRoutingModule } from './modeles-routing.module';
import { ModelesGeneralComponent } from './modeles-general/modeles-general.component';
import { PurgerModelesComponent } from './purger-modeles/purger-modeles.component';
import { HeaderComponent } from './header/header.component';
import { MenuModule } from '../layout/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    AngularFontAwesomeModule,
    ModelesRoutingModule,
    MenuModule
  ],
  declarations: [
  	ModelesGeneralComponent, 
    PurgerModelesComponent, 
    HeaderComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class ModelesModule { }
