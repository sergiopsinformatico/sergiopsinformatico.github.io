import { Injectable } from '@angular/core';
import { ConstantsMyApps } from '../constants/constants-my-app';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MyConfigModel } from '../models/my-config.model';

@Injectable({
  providedIn: 'root'
})
export class MyAppServicesService {

  myConfig: any;

  constructor(private http: HttpClient) {
  }

  loadMyConfig(){
      return this.http.get(ConstantsMyApps.DIR_CONFIG);
  }

  setConfig(theConfig: any){
    this.myConfig = new MyConfigModel(theConfig);
  }

  getMyConfig(): MyConfigModel{
    return this.myConfig;
  }

}
