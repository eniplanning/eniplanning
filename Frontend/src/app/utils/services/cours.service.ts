import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';

import { CONFIG } from '../../utils/config';
import { Cours } from '../models/cours';
import { Planning } from '../models/planning';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

	coursAPI = CONFIG.backend_url + 'cours';

    constructor(private http: HttpClient){
    }

}
