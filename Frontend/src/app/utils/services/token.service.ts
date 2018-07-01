import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = 'localhost';
  
  constructor() { }

  handleToken(token) {
    this.set(token);
    // console.log(this.payload(token));  => retourne la valeur décodée du payload (url appel)
    // console.log(this.isValid());
  }

  set(token) {
    localStorage.setItem('token', token);
  }
  
  get() {
    return localStorage.getItem('token');
  } 
  
  remove() {
    localStorage.removeItem('token');
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
