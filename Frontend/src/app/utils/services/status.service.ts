import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../models/user';
import { API } from '../api';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(
    private http: HttpClient,
  ) { }

  getBackendStatus() {
    return this.http.get(API.backendstatusAPI);
  }

  getEniDBStatus() {
    return this.http.get(API.eniDBstatusAPI);
  }

  getErpDBStatus() {
    return this.http.get(API.erpDBstatusAPI);
  }
}
