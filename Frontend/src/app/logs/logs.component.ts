import { Component, OnInit } from '@angular/core';
import { ActivityLog } from '../utils/models/activityLog';
import { ActivityLogService } from '../utils/services/activitylog.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss'],
})
export class LogsComponent implements OnInit {

  currentActivityLog: ActivityLog;
  activityLogs: ActivityLog[];
  private sorted = false;
  searchActivityValue: string;
  errorMsg : string =null;

  constructor(
    private activityLogService: ActivityLogService,
  ) { }

  ngOnInit() {
    this.getActivityLogs();
    if (this.activityLogs != null) { this.sortBy('date') };
  }
  
  // Filtrer les utilisateurs lors de la recherche (par nom)
  filterUser(datas, value) {
    this.sortBy('properties');
    return datas.filter(singleItem => singleItem['description'].toLowerCase().includes(value.toLowerCase()));
  }

  // Rechercher automatiquement à la saisie d'une activité
  searchActivity() {
    if (!this.searchActivityValue) {
      console.log('no search value'); 
      return this.activityLogs;
    } else {
      console.log('searching value'); 
      return this.filterUser(this.activityLogs, this.searchActivityValue);
    }
  }

  // Tri des logs par type
  sortBy(key: string | any): void {

    this.activityLogs.sort((a: any, b: any) => {
      if (a[key] < b[key]) {
        return this.sorted ? 1 : -1;
      }
      if (a[key] > b[key]) {
        return this.sorted ? -1 : 1;
      }
      return 0;
    });
    this.sorted = !this.sorted;
  }

  // Récupération des Logs d'activité  depuis le service
  getActivityLogs() {
    this.activityLogService.getActivityLogs().subscribe(
      data => {
        this.activityLogs = data;
        this.errorMsg = null;
      },
      error => {
        this.errorMsg=("Erreur de réponse du serveur, veuillez contacter l'administrateur.");
        console.log("erreur getActivityLogs", error);
      },
      () => this.activityLogs.sort(function(a, b) {
        //custom sorting function, sorts by stagiaire.Nom in alphabetical order
        if (a.properties > b.properties)
          return -1;
        else if (a.properties < b.properties)
          return 1;
        return 0
      })
    );
  }

  
  // Raffraichissement de la liste après purge
  refreshList(event){
    this.getActivityLogs();  
  }
  
}
