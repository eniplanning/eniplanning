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
    
  getUsers() {
    return this.http.get<User[]>(API.userAPI);
  }

  createUser(user: User) {
    return this.http.post(API.userAPI, user).subscribe(
      data=>{
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }


  updateUser(user: User) {
    //console.log('user', JSON.stringify(user));
    //console.log('url =', API.userAPI + '/' + user.id);
    return this.http.put(API.userAPI + '/' + user.id, user, this.httpOptions).subscribe(
      data=>{
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }

  handleUser(dataUserId: number) {
    this.user = this.getUser(dataUserId);
  }
  
  setUser(data) {
    sessionStorage.setItem('user_id', data.id);
    sessionStorage.setItem('user_name', data.name);
    sessionStorage.setItem('user_firstname', data.firstname);
    sessionStorage.setItem('user_role', data.role_id);
  }

  unsetUser() {
    sessionStorage.removeItem('user_id');
    sessionStorage.removeItem('user_name');
    sessionStorage.removeItem('user_firstname');
    sessionStorage.removeItem('user_role');
  } 

  getUserName() {
    return sessionStorage.getItem('user_firstname') + ' ' + sessionStorage.getItem('user_name');
  }
}
