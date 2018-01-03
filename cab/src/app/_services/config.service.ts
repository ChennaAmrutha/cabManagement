import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ConfigService {
 //baseUrl:string="http://localhost:8080";
 apiRoot: string = "http://httpbin.org/get";
  constructor(private http : Http) { }
  setBaseUrl(baseUrl){
    //this.baseUrl=baseUrl;
  }
  get(path:string):Observable<Response>{
    return this.http
    .get(this.apiRoot)
    .map((response: Response) => {
        return response;
    })
  }

}
