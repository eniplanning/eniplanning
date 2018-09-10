import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../api';
import { Entreprise } from '../models/entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  
  constructor(
    private http : HttpClient,
  ) { }

  // Récupération d'une entreprise en fonction de son code
  getEntrepriseById(idEntreprise: string): Observable<Entreprise>
  {
      return this.http.get<Entreprise>(API.entreprise+ '/'+idEntreprise);
  }
}