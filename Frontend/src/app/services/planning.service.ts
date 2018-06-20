import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';

import { Planning } from '../models/planning';
import { ENIconfig } from '../ENIConfig';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {

	planningsAPI = ENIconfig.backendAPI + 'planning';
  plannings: any;

  constructor(private http: HttpClient) { 
    this.plannings = this.getPlannings;
  }

  getPlannings(): Observable<Planning[]> {
    return this.http.get<Planning[]>(this.planningsAPI);
  }
  
  getPlanningsByStagiaire(codeStagiaire:number):Observable<Planning> {
    return of(this.plannings.find(planning => planning.CodeStagiaire === codeStagiaire));
  }

  createPlanning(planning: Planning) {
    return this.http.post(this.planningsAPI, planning);
  }

  updatePlanning(planning: Planning) {
    return this.http.put(this.planningsAPI + '/' + planning.planning_id, planning);
  }

  deleteUser(id: number) {
    return this.http.delete(this.planningsAPI + '/' + id);
  }
}
