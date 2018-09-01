import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

import { User } from '../models/user';
import { API } from '../api';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  user: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json;charset=UTF-8'
    })
  };

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    private router: Router,
  ) { }

  getUser(dataUserId: number) {
    this.http.get(API.userAPI+'/'+dataUserId, {responseType: 'json'}).subscribe(
      data => {
        this.user = data;
        this.setUser(data);
        this.loginService.changeAuthStatus(true);
        this.router.navigateByUrl('/planning');
      },
      error => {
        console.log(error);
      }
    );
  }

  public getUsers() {
    return this.http.get<User[]>(API.userAPI);
  }

  public updateUser(data) {
    return this.http.put(API.userAPI + '/' + data.id, data, this.httpOptions);
  }
  
  public setUser(data) {
    sessionStorage.setItem('user', JSON.stringify(data));
  }

  public unsetUser() {
    sessionStorage.removeItem('user');
  }
}
