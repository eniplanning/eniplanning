import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = 'localhost';
  
  constructor() { }

  handleToken(token) {
    this.setToken(token);
  }

  setToken(token) {
    sessionStorage.setItem('token', token);
  }
  
  get() {
    return sessionStorage.getItem('token');
  } 
  
  remove() {
    sessionStorage.removeItem('token');
  } 

  isValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return (this.iss === payload.iss ? true : false);
      }
    }
    return false; 
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload){
    return JSON.parse(atob(payload));
  }

  loggedIn(){
    return this.isValid;
  }
}
