import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Module } from '../models/module';
import { API } from '../api';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(
    private http: HttpClient,
  ) { }

  
  getModuleById(libelleCourt: string): Observable<Module> {
    return this.http.get<Module>(API.module + '/' + libelleCourt, {responseType: 'json'});
  }

  getModules(): Observable<Module[]> { 
    return this.http.get<Module[]>(API.module);
  }
}
