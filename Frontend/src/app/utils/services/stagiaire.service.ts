import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';

import { Stagiaire } from '../models/stagiaire';
import { CONFIG } from '../../utils/config';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

	stagiairesAPI = CONFIG.backend_url + 'stagiaire';

  constructor(private http: HttpClient) {
  }

  getStagiaires(): Observable<Stagiaire[]> {
    return this.http.get<Stagiaire[]>(this.stagiairesAPI);
  }

  setSelectedStagiaire(stagiaire: Stagiaire) {
  	sessionStorage.setItem('selectedStagiaire', JSON.stringify(stagiaire));
  }
}