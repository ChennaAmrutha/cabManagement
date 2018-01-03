import { Injectable } from '@angular/core';
import {ConfigService} from './config.service';
import {Observable} from 'rxjs/Rx';
import {Http} from '@angular/http';
import {HttpModule,Response} from '@angular/http';
import "rxjs/Rx";

@Injectable()
export class LoginService {
  apiRoot: string = "http://httpbin.org/get";
  constructor(private ConfigService:ConfigService,private http : Http) {

   }
   validateUser():Observable<any>{
    return this.http
    .get(this.apiRoot)
    .map((response: Response) => {
        return response;
    })
    
}
}
