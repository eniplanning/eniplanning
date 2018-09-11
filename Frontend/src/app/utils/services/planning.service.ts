import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Planning } from '../models/planning';
import { CONFIG } from '../../utils/config';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {

	planningsAPI = CONFIG.backend_url + 'planning';
    planningsByCode = CONFIG.backend_url + 'planningsByCodeStagiaire';
    selectedPlanning = new BehaviorSubject<Planning>(null);
    newPlanning = new BehaviorSubject<Planning>(null);
    updatePlanningsList = new BehaviorSubject(null);
    openModalUpdatePlanning = new BehaviorSubject<Array<any>>(null);
    alertPlanningList = new BehaviorSubject<Array<any>>(null)

  httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  };

  constructor(private http: HttpClient) {
  }

  getPlanningsByStagiaire(codeStagiaire: Number): Observable<Planning[]> {
    return this.http.get<Planning[]>(this.planningsByCode + '/' + codeStagiaire);
  }

  getPlanningById(idPlanning: Number): Observable<Planning> {
    return this.http.get<Planning>(this.planningsAPI + 'Global/' + idPlanning);
  }

  createPlanning(planning: Planning): Observable<Planning> {
    return this.http.post<Planning>(this.planningsAPI, planning);
  }

  updatePlanning(planning: Planning): Observable<Planning>  {
    return this.http.put<Planning>(this.planningsAPI + '/' + planning.id, planning);
  }

  deletePlanning(planning: Planning) {
      return this.http.delete<Planning>(this.planningsAPI + '/' + planning.id);
  }

  setSelectedPlanning(planning: Planning) {
    this.clearCoursOnPage();
    sessionStorage.setItem('selectedPlanning', JSON.stringify(planning));
    this.selectedPlanning.next(planning);
  }

  //Clear cours on web page from previous planning
  clearCoursOnPage() {
    let c = document.getElementsByClassName('green-bg');
    while (c[0]) {
        c[0].classList.remove('green-bg')
    }
  }
}
