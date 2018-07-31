import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';

import { Planning } from '../models/planning';
import { CONFIG } from '../../utils/config';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {

	planningsAPI = CONFIG.backend_url + 'planning';
  planningsByCode = CONFIG.backend_url + 'planningbystagiaire';
  //plannings: any;

  constructor(private http: HttpClient) { 
    //this.plannings = this.getPlanningsByStagiaire;
  }

  getPlanningsByStagiaire(codeStagiaire: Number): Observable<Planning[]> {
    return this.http.get<Planning[]>(this.planningsByCode + '/' + codeStagiaire);
  }

  createPlanning(planning: Planning) {
    return this.http.post(this.planningsAPI, planning);
  }

  updatePlanning(planning: Planning) {
    return this.http.put(this.planningsAPI + '/' + planning.planning_id, planning);
  }

  deletePlanning(id: Number) {
    return this.http.delete(this.planningsAPI + '/' + id);
  }

  setSelectedPlanning(planning: Planning) {
    sessionStorage.setItem('selectedPlanning', JSON.stringify(planning));
  }
}
