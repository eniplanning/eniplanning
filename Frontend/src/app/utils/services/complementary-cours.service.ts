import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComplementaryCours } from '../models/complementary-cours';
import { API } from '../api';

@Injectable({
  providedIn: 'root'
})
export class ComplementaryCoursService {

  constructor(
      private httpClient:         HttpClient,
  ) { }
  
  public getComplementaryCourses() {
    return this.httpClient.get<ComplementaryCours[]>(API.complementaryCourse);
  }
  
  public enregistrerComplementaryCourses(complementaryCours: ComplementaryCours) {
    return this.httpClient.post(API.complementaryCourse, complementaryCours);
  }
  
  public existComplementaryCourse(idModule:number, start:Date, end:Date) {
    // TODO
  }
}