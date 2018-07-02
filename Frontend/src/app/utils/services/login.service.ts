import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { CONFIG } from '../../utils/config';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

	loginAPI = CONFIG.backend_url + 'login';
  registerAPI = CONFIG.backend_url + 'user';
  response: Observable<Object>;
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

  constructor(
    private http: HttpClient,
  ) {  }


  changeAuthStatus(value: boolean){
    this.loggedIn.next(value);
    localStorage.setItem('loggedIn', (value ? 'true' : 'false'));
  }

  getStatus() {
    console.log("localStorage.getItem('loggedIn') = "+localStorage.getItem('loggedIn'));
    return this.loggedIn.asObservable();
  }

  
  login(data)
  {
    return this.http.post(this.loginAPI, data);
    
  }
  
  store(data)
  {  
    return this.http.post(this.registerAPI, data);
  }
}

