import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { CtrDisponibility } from '../models/ctrDisponibility';
import { CONFIG } from '../../utils/config';

@Injectable({
  providedIn: 'root'
})
export class ConstraintService {

    disponibilityAPI = CONFIG.backend_url + 'ctrDisponibility';
    // disponibilityByPlanning = CONFIG.backend_url + 'planningsByCodeStagiaire';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) {}

    //-----------------------------------------------------------------------------------------//
    //--------------------- Méthode pour les contraintes de disponibilités --------------------//
    //-----------------------------------------------------------------------------------------//
    getDisponibilityByPlanning(idPlanning: Number): Observable<CtrDisponibility> {
        return this.http.get<CtrDisponibility>(this.disponibilityAPI + '/' + idPlanning);
    }

    createDisponibilityConstraint(constraint: CtrDisponibility): Observable<CtrDisponibility> {
        return this.http.post<CtrDisponibility>(this.disponibilityAPI, constraint);
    }

    updateDisponibilityConstraint(constraint: CtrDisponibility) {
        return this.http.put(this.disponibilityAPI + '/' + constraint.id, constraint);
    }

    deleteDisponibilityConstraint(constraint: CtrDisponibility) {
        return this.http.delete(this.disponibilityAPI + '/' + constraint.id);
    }
}
