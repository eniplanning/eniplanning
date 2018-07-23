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
    lieux: any;

    constructor(private http:HttpClient)
    {
        this.lieux = this.getLieux;
    }

    getLieux(): Observable<Lieu[]>
    {
        return this.http.get<Lieu[]>(this.lieuAPI);
    }

    getLieu(codeLieu: number)
    {
        return of(this.lieux.find(lieu => lieu.codeLieu === codeLieu))
    }

}
