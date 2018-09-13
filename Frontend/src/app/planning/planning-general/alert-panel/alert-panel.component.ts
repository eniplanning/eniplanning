import { Component, OnInit } from '@angular/core';
import { PlanningService } from '../../../utils/services/planning.service'

@Component({
  selector: 'app-alert-panel',
  templateUrl: './alert-panel.component.html',
  styleUrls: ['./alert-panel.component.scss']
})
export class AlertPanelComponent implements OnInit {

    alertPlanningList: Array<any>;

  constructor(private planningService: PlanningService) { }

  ngOnInit() {
    this.planningService.alertPlanningList.subscribe(
        data => {
            this.alertPlanningList = data;
            console.log(data);
        }
    );
  }

}
