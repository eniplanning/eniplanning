import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Titre } from '../models/titre';
import { API } from '../api';

@Injectable({
  providedIn: 'root'
})
export class TitreService {

  constructor(
    private http: HttpClient,
  ) { }

  public getTitre(CodeTitre: string) {
    return this.http.get<Titre>(API.backendTitre+'/'+CodeTitre);
  }

}
