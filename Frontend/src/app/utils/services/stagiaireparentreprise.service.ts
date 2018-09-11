import { Injectable } from '@angular/core';
import { StagiaireParEntreprise } from '../models/stagiaireparentreprise';
import { HttpClient } from '@angular/common/http';
import { API } from '../api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StagiaireparentrepriseService {

  constructor(
    private http : HttpClient,
  ) { }

  // Récupération d'une formation en fonction de son CodeFormation
  getStagiaireParEntrepriseByIdStagiaire(idStagiaire: number): Observable<StagiaireParEntreprise>
  {
      return this.http.get<StagiaireParEntreprise>(API.stagiaireParEntreprise+ '/'+idStagiaire);
  }

  // Récuparation de la liste des Stagiaires par entreprise
  getAllStagiairesParEntreprise(): Observable<StagiaireParEntreprise[]>
  {
      return this.http.get<StagiaireParEntreprise[]>(API.stagiaireParEntreprise);
  }
}
