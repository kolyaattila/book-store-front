import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;
import { HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as jwt from "jwt-decode";
import { element } from '@angular/core/src/render3';

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


  public login(email:String,password:string){
    return this.http.post<any>("http://localhost:8080/user/signin",{'email':email,'password':password},this.httpOptions);
  }

  getToken(){
    return this.jwtHelper.tokenGetter();
  }


  public isAuthenticated(): boolean {

    const token = localStorage.getItem('token');

    // Check whether the token is expired and return
    // true or false
    if(token!=""){
    console.log("isAuthenticated() ->> "+token);
    return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }

  public isAuthenticatedAs(role): boolean {

    const token = localStorage.getItem('token');
    
    // Check whether the token is expired and return
    // true or false
    if(this.isAuthenticated){
      var tokenPayload:any = jwt(token);
     if(tokenPayload.roles.find(function(element){
        if(element.authority==role)
          return true;
      })){
        return true;
      }
      else{
        return false;
      }
    }
  }
  







}
