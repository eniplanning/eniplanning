import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';

import { CONFIG } from '../../utils/config';
import { Lieu } from "../models/lieu";

@Injectable({
  providedIn: 'root'
})
export class LieuService {

    lieuAPI = CONFIG.backend_url + 'lieu';

    constructor(private http:HttpClient){
    }

    getLieux(): Observable<Lieu[]>
    {
        return this.http.get<Lieu[]>(this.lieuAPI);
    }

    getLieu(code_lieu: number): Observable<Lieu>
    {
        return this.http.get<Lieu>(this.lieuAPI + '/' + code_lieu);
    }

}
