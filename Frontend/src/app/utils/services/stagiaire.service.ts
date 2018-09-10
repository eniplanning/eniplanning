import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Stagiaire } from '../models/stagiaire';
import { CONFIG } from '../../utils/config';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

	stagiairesAPI = CONFIG.backend_url + 'stagiaire';
  selectedStagiaire = new BehaviorSubject<Stagiaire>(null);

  constructor(private http: HttpClient) {
  }

  getStagiaires(): Observable<Stagiaire[]> {
    return this.http.get<Stagiaire[]>(this.stagiairesAPI);
  }

  getStagiaireById(stagiaireId: number): Observable<Stagiaire> {
    return this.http.get<Stagiaire>(this.stagiairesAPI+ '/' + stagiaireId, {responseType: 'json'});
  }

  setSelectedStagiaire(stagiaire: Stagiaire) {
  	sessionStorage.setItem('selectedStagiaire', JSON.stringify(stagiaire));
    this.selectedStagiaire.next(stagiaire);
  }
}