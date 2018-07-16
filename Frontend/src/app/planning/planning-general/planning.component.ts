import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  username: string;
  
  constructor() { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }
}
