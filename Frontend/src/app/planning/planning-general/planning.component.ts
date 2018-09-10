import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { Stagiaire } from '../../utils/models/stagiaire';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  username:             String;
  alertPlanningList:   Array<any>;

    constructor() { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
    registerLocaleData(localeFr);
  }
}
