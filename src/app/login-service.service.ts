import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;
import { HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private jwtHelper: JwtHelperService ) { 
  
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };


  login(email:String,password:string){
    return this.http.post<any>("http://localhost:8080/user/signin",{"email":email,"password":password},this.httpOptions);
  }


  public isAuthenticated(): boolean {

    const token = localStorage.getItem('token');

    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }







}
