import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgSelectModule, NG_SELECT_DEFAULT_CONFIG } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PlanningRoutingModule } from './planning-routing.module';
import { PlanningComponent } from './planning/planning.component';
import { LeftPanelComponent } from './planning/left-panel/left-panel.component';
import { RightPanelComponent } from './planning/right-panel/right-panel.component';
import { ModalCreatePlanningComponent } from './planning/modal-create-planning/modal-create-planning.component';

@NgModule({
  declarations: [PlanningComponent, LeftPanelComponent, RightPanelComponent, ModalCreatePlanningComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule,
    NgSelectModule,
    FormsModule,
    AngularFontAwesomeModule,
    PlanningRoutingModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    {
        provide: NG_SELECT_DEFAULT_CONFIG,
        useValue: {
            notFoundText: 'Stagiaire non trouvé'
        }
    }
  ]
})
export class PlanningModule { }
