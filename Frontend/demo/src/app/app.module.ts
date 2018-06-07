import 'hammerjs';

import { NavbarComponent } from './../../../src/navbars/navbar.component';
import { NavbarService } from './../../../src/navbars/navbar.service';
import { LogoComponent } from './../../../src/navbars/logo.component';
import { LinksComponent } from './../../../src/navbars/links.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from '../../../src';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import all Material Design modules here
import { 
  
} from '@angular/material';
//import all components here
import { AppComponent } from './app.component';

//create a class in charge of loading all material design modules
@NgModule({
  exports: [
  ]
})
export class MaterialModule {}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    MDBBootstrapModule.forRoot(),
    AngularFontAwesomeModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule //import all material design modules
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    NavbarService,
    {
        provide: NG_SELECT_DEFAULT_CONFIG,
        useValue: {
            notFoundText: 'Aucun stagiaire trouvé'
        }
    }
  ],
  bootstrap: [AppComponent],
  exports: [ 
    NavbarComponent,
    LinksComponent,
    LogoComponent
  ]
})
export class AppModule {}
