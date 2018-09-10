import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivityLog } from '../../utils/models/activitylog';
import { ActivityLogService } from '../../utils/services/activitylog.service';
;


@Component({
  selector: 'logs-purger',
  templateUrl: './logs-purger.component.html',
  styleUrls: ['./logs-purger.component.scss']
})
export class LogsPurgerComponent implements OnInit {
  
  // A la fermeture de la modal, envoi d'un message pour raffraichissement de la liste
  @Output() closed = new EventEmitter<string>();
  sendMessage(){
    this.closed.emit();
  }

  activityLog : ActivityLog;
  
  constructor(
    private activityLogService : ActivityLogService,
    private datePipe: DatePipe,
  ) { }

  ngOnInit() {
  }

  // Purge des logs
  deleteLogs() {

    return this.activityLogService.deleteLogs().subscribe(
      data=>{ 
        console.log('Purge des Logs effectuée.');
        this.createActivityLog();
      },
      error=>{ 
        console.log('Erreur lors de la purge des Logs.');
      },
      ()=>{ 
        this.sendMessage();
      },
    );
  }

  
  // Journalisation de l'activité
  createActivityLog() {
    this.activityLog = new ActivityLog();
    this.activityLog.log_name = JSON.parse(sessionStorage.getItem('user')).name+ ' '+ JSON.parse(sessionStorage.getItem('user')).firstname;
    this.activityLog.description = 'Tous';
    this.activityLog.subject_id=null;
    this.activityLog.subject_type='Purge';
    this.activityLog.causer_id=JSON.parse(sessionStorage.getItem('user')).id;
    this.activityLog.causer_type='Log Activité' ;
    this.activityLog.properties= this.datePipe.transform(new Date(),"yyyy-MM-dd HH:mm", 'fr-Fr');
    this.activityLogService.storeActivityLog(this.activityLog).subscribe(
      data => console.log("log d'activité enregistré"), 
      error => console.log("erreur d'enregistrement du log d'activité: "+ error)
    );
    this.activityLog = null;
  }

}
