import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../api';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient,
  ) {  }
  
  store(data)
  {  
    return this.http.post(API.userAPI, data);
  }
}
