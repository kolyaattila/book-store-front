import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import {LoginService} from 'src/app/login-service.service'
import * as jwt_decode from "jwt-decode";
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable(
  {providedIn: 'root'}
  )
export class RoleGuradService implements CanActivate {

  constructor(public auth: LoginService, public router: Router,public jwtHelper: JwtHelperService) {}

  canActivate(route: ActivatedRouteSnapshot){
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;

    const token = this.auth.getToken();
    
    // decode the token to get its payload
    const tokenPayload = this.jwtHelper.decodeToken(token);
    console.log("haha"+tokenPayload );
    if (!this.auth.isAuthenticated() || tokenPayload !== expectedRole) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }


  private getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

}
