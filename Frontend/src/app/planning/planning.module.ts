import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA, LOCALE_ID } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PlanningRoutingModule } from './planning-routing.module';

import { PurgerPlanningComponent } from './purger-planning/purger-planning.component';
import { PlanningComponent } from './planning-general/planning.component';
import { LeftPanelComponent } from './planning-general/left-panel/left-panel.component';
import { RightPanelComponent } from './planning-general/right-panel/right-panel.component';
import { HeaderComponent } from './header/header.component';
import { MenuModule } from '../layout/menu/menu.module';
import { ModalCreatePlanningComponent } from './planning-general/modal-create-planning/modal-create-planning.component';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { GenerateHtmlComponent } from './planning-general/generate-html/generate-html.component';
import { AlertPanelComponent } from './planning-general/alert-panel/alert-panel.component';

@NgModule({
  declarations: [
    PlanningComponent,
    LeftPanelComponent,
    RightPanelComponent,
    PurgerPlanningComponent,
    HeaderComponent,
    ModalCreatePlanningComponent,
    GenerateHtmlComponent,
    AlertPanelComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    NgSelectModule,
    FormsModule,
    AngularFontAwesomeModule,
    PlanningRoutingModule,
    MenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    {
        provide: NG_SELECT_DEFAULT_CONFIG,
        useValue: {
            notFoundText: 'Aucun stagiaire trouvé'
        }
    },
    {
        provide: LOCALE_ID,
        useValue: 'fr'
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'fr'
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MAT_MOMENT_DATE_FORMATS
    }
  ]
})
export class PlanningModule {}
