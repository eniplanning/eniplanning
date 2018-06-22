import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { Injectable } from '@angular/core';

import { User } from '../models/user';
import { CONFIG } from '../../utils/config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	usersAPI = CONFIG.backend_url + 'user';
  users: any;

  constructor(private http: HttpClient) {
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
}
