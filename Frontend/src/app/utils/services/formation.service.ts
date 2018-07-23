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
    formations: any;


    constructor(private http: HttpClient)
    {
        this.formations = this.getFormations;
    }

    // Récupération de la liste des formation via le Backend
    getFormations(): Observable<Formation[]>
    {
        return this.http.get<Formation[]>(this.formationAPI);
    }

    // Récupération d'une formations en fonction de son CodeFormation
    getFormation(codeFormation:number):Observable<Formation>
    {
        return of(this.formations.find(formation => formation.codeFormation === codeFormation));
    }
}
