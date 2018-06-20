import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PlanningRoutingModule } from './planning-routing.module';
import { PurgerPlanningComponent } from './purger-planning/purger-planning.component';
import { PlanningComponent } from './planning-general/planning.component';
import { LeftPanelComponent } from './planning-general/left-panel/left-panel.component';
import { RightPanelComponent } from './planning-general/right-panel/right-panel.component';
import { PlanningsEnDefautComponent } from './plannings-en-defaut/plannings-en-defaut.component';

@NgModule({
  declarations: [PlanningComponent, LeftPanelComponent, RightPanelComponent, PurgerPlanningComponent, PlanningsEnDefautComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    NgSelectModule,
    FormsModule,
    AngularFontAwesomeModule,
    PlanningRoutingModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    {
        provide: NG_SELECT_DEFAULT_CONFIG,
        useValue: {
            notFoundText: 'Aucun stagiaire trouvé'
        }
    }
  ]
})
export class PlanningModule { }
