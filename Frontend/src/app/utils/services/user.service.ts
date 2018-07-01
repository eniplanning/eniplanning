import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject} from 'rxjs';
import { Injectable } from '@angular/core';
// import { CookieService } from 'ngx-cookie-service';

import { User } from '../models/user';
import { CONFIG } from '../../utils/config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersAPI = CONFIG.backend_url + 'user';
  users: any;
  user: any;


  constructor(
    private http: HttpClient,
    //private cookie: CookieService,
  ) { }

  getUser(user_id: number) {
    return this.http.get(this.usersAPI+'/'+user_id, {responseType: 'json'}).subscribe(
      data=>{
          this.setUser(data);
      },
      error=>{
        console.log(error);
      }
    );
  }
  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersAPI);
  }

  createUser(user: User) {
    return this.http.post(this.usersAPI, user);
  }

  updateUser(user: User) {
    return this.http.put(this.usersAPI + '/' + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.usersAPI + '/' + id);
  }

  handleUser(id: number) {
    this.user = this.getUser(id);
  }
  
  setUser(data) {
    this.user = new User(data);
    //this.cookie.set('eniplanning',JSON.stringify(this.user));
    localStorage.setItem('user_id',  this.user.id);
    localStorage.setItem('role_id', this.user.role_id);
    localStorage.setItem('username', this.user.username);
  }

  unsetUser() {
    localStorage.removeItem('user_id');
    localStorage.removeItem('role_id');
    localStorage.removeItem('username');
  } 
}
