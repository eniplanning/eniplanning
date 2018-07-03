import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject} from 'rxjs';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { User } from '../models/user';
import { API } from '../api';
import { ROLES } from '../role';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  user: any;

  constructor(
    private http: HttpClient,
    private cookie: CookieService,
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
    
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(API.userAPI);
  }

  createUser(user: User) {
    return this.http.post(API.userAPI, user);
  }

  updateUser(user: User) {
    return this.http.put(API.userAPI + '/' + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(API.userAPI + '/' + id);
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
