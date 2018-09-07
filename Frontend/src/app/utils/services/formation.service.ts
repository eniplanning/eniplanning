import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';

import { CONFIG } from '../../utils/config';
import { Formation } from '../models/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService
{
    formationAPI = CONFIG.backend_url + 'formation'
    formation_Promotion_Cours = CONFIG.backend_url + 'formationByPeriodLieu'

    constructor(private http: HttpClient){
    }

    // Récupération de la liste des formation via le Backend
    getFormations(): Observable<Formation[]>
    {
        return this.http.get<Formation[]>(this.formationAPI);
    }

    // Récupération d'une formations en fonction de son CodeFormation
    getFormation(codeFormation: string): Observable<Formation>
    {
        return this.http.get<Formation>(this.formation_Promotion_Cours + '/' + codeFormation);
    }
}
