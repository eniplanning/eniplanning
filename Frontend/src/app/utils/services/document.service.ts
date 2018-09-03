import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API } from '../api';

@Injectable({
  providedIn: 'root'
})

export class DocumentService {

  user: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'Accept-Encoding':'gzip, deflate, br',
      'Response-Type': 'blob',
      //'Access-Control-Allow-Origin':'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
      'Access-Control-Allow-Credentials': 'true'
    })
  };

  /*Accept-Encoding: gzip, deflate, br
Accept-Language: fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7
Connection: keep-alive
Cookie: application=ENIPLANNING; user_email=administrateur%40eniplanning.fr; user_password=P%40%24%24w0rd
Host: localhost
Upgrade-Insecure-Requests: 1
*/


  constructor(
    private http: HttpClient
  ) { }

  getPlanning() {
    return this.http.get(API.getPlanningAPI);
  }
}
