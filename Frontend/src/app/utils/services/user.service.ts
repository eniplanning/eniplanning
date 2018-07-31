import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { User } from '../models/user';
import { API } from '../api';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  user: any;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getUser(dataUserId: number) {
    return this.http.get(API.userAPI+'/'+dataUserId, {responseType: 'json'}).subscribe(
      data=>{
        this.setUser(data);
      },
      error=>{
        console.log(error);
      }
    );
  }
    
  public getUsers() {
    return this.http.get<User[]>(API.userAPI);
  }

  public createUser(user: User) {
    return this.http.post(API.userAPI, user).subscribe(
      data=>{
        console.log('user created', data);
      },
      error=>{
        console.log(error);
      }
    );
  }


  public updateUser(user: User) {
    return this.http.put(API.userAPI + '/' + user.id, user, this.httpOptions).subscribe(
      data=>{
        sessionStorage.setItem('user', JSON.stringify(user));
      },
      error=>{
        console.log(error);
      }
    );
  }

  public handleUser(dataUserId: number) {
    this.user = this.getUser(dataUserId);
  }
  
  public setUser(data) {
    sessionStorage.setItem('user', JSON.stringify(data));
  }

  public unsetUser() {
    sessionStorage.removeItem('user');
  }

  public getUserName() {
    return JSON.parse(sessionStorage.getItem('user'));
  }
}
