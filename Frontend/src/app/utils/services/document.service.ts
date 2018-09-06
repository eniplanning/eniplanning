import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { API } from '../api';

@Injectable({
  providedIn: 'root'
})

export class DocumentService {



  constructor(
    private http: Http,
    private httpClient: HttpClient,
  ) { }

  getPlanning() {
   // return this.http.get(API.getPlanningAPI, {responseType: 'blob' as 'json'});
    return this.http.get(API.getPlanningAPI);
  }

  downloadPDF() : any {
    // const options = { responseType: ResponseContentType.Blob  };
    // return this.httpClient.get("/", options).map(
    // (res) => {
    //     return new Blob([res.blob()], { type: 'application/pdf' });
    // });
  }
}
