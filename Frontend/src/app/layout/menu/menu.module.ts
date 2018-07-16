import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu-routing.module';

@NgModule({
  imports: [
  	AngularFontAwesomeModule,
  	MDBBootstrapModule.forRoot(),
    MenuRoutingModule
  ],
  declarations: [
  	MenuComponent
  ],
  exports: [
  	MenuComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MenuModule {}