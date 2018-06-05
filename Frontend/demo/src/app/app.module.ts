import { NavbarComponent } from './../../../src/navbars/navbar.component';
import { NavbarService } from './../../../src/navbars/navbar.service';
import { LogoComponent } from './../../../src/navbars/logo.component';
import { LinksComponent } from './../../../src/navbars/links.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from '../../../src';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

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
    FormsModule
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
  exports: [ NavbarComponent, LinksComponent, LogoComponent],
})
export class AppModule {
}
