import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { 

  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };


  public login (email:String,password:string){
    return this.http.post("localhost:8080/login",{"email":email,"password":password},this.httpOptions).subscribe();
  }







}
