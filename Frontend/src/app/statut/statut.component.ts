import { Component, OnInit } from '@angular/core';
import { StatusService } from '../utils/services/status.service';

@Component({
  selector: 'app-statut',
  templateUrl: './statut.component.html',
  styleUrls: ['./statut.component.scss']
})
export class StatutComponent implements OnInit {

  backendStatus : any;  // Statut de Laravel (Wampserver)
  backend:boolean = false;
  erpDatabaseStatus : any;  // Statut de ERP (SQL Server)
  erpDatabase:boolean = false;
  eniDatabaseStatus : any;  // Statut de ENI PLANNING (MySQL)
  eniDatabase:boolean = false;

  constructor(
    private statusService : StatusService,
  ) { }

  ngOnInit() {
    this.getBackEndService();
    this.getErpDatabaseService();
    this.getEniDatabaseService();
  }

  getBackEndService() {
    this.statusService.getBackendStatus().subscribe(
      data => {
        this.backendStatus = data;
        this.backend = true;
        console.log(this.backendStatus);
      },
      error => {
        console.log(error);
        this.backendStatus = "Hors service";
        this.backend = false;
      }
    );
  }

  getErpDatabaseService() {
    this.statusService.getErpDBStatus().subscribe(
      data => {
        this.erpDatabaseStatus = data;
        this.erpDatabase = true;
        console.log(this.backendStatus);
      },
      error => {
        console.log(error);
        this.erpDatabaseStatus = "Hors service";
        this.erpDatabase = false;
      }
    );
  }
  

  getEniDatabaseService() {
    this.statusService.getEniDBStatus().subscribe(
      data => {
        this.eniDatabaseStatus = data;
        this.eniDatabase = true;
        console.log(this.backendStatus);
      },
      error => {
        console.log(error);
        this.eniDatabaseStatus = "Hors service";
        this.eniDatabase = false;
      }
    );
  }
}
