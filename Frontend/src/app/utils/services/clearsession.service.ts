import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClearsessionService {

  constructor() { }

  run() {
    sessionStorage.clear();
  }
}
