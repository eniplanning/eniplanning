import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComplementaryModule } from '../models/complementary-module';
import { API } from '../api';
import { Planning } from '../models/planning';

@Injectable({
  providedIn: 'root'
})
export class ComplementaryModuleService {

 constructor(
    private httpClient:         HttpClient,
  ) { }

  public getComplementaryModules() {
    return this.httpClient.get<ComplementaryModule[]>(API.complementaryModule);
  }

  public saveModule(complementaryModule: ComplementaryModule) {
    return this.httpClient.post(API.complementaryModule, complementaryModule);
  }
}
