import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';

import { Stagiaire } from '../models/stagiaire';
import { ENIconfig } from '../ENIConfig';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

	stagiairesUrl = ENIconfig.stagiairesAPI;
  stagiaires: any;

  constructor(private http: HttpClient) {
    this.stagiaires = this.getStagiaires;
  }

  getStagiaires(): Observable<Stagiaire[]> {
    return this.http.get<Stagiaire[]>(ENIconfig.stagiairesAPI);
  }

  getStagiaire(codeStagiaire:number):Observable<Stagiaire> {
    return of(this.stagiaires.find(stagiaire => stagiaire.CodeStagiaire === codeStagiaire));
  }
}

