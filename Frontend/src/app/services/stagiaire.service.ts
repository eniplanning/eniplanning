import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';

import { Stagiaire } from '../models/stagiaire';
import { CONFIG } from '../utils/config';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

	stagiairesAPI = CONFIG.backend_url + 'stagiaire';
  stagiaires: any;

  constructor(private http: HttpClient) {
    this.stagiaires = this.getStagiaires;
  }

  getStagiaires(): Observable<Stagiaire[]> {
    return this.http.get<Stagiaire[]>(this.stagiairesAPI);
  }

  getStagiaire(codeStagiaire:number):Observable<Stagiaire> {
    return of(this.stagiaires.find(stagiaire => stagiaire.CodeStagiaire === codeStagiaire));
  }

}

