import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  dateur: string;

  constructor() { }

  LogConsole(label:string, message) {
    console.log('BMVC Debug :', label, message );
  }

  LogFile(composant: string, activite) {
    this.dateur = formatDate(Date.now(), "yyyy-mm-dd h:MM:ss", 'en-US', '+0530');
    console.log(this.dateur, ': composant :', composant, '- activité :', activite);
  }
}
