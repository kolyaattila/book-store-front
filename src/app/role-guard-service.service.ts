import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import {LoginService} from 'src/app/login-service.service'
import { JwtHelperService } from '@auth0/angular-jwt';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
@Injectable(
  {providedIn: 'root'}
  )
export class RoleGuardService implements CanActivate {

  constructor(public auth: LoginService, public router: Router,public jwtHelper: JwtHelperService) {}

  canActivate(route: ActivatedRouteSnapshot){
    // this will be passed from the route config
    // on the data property
    if (this.auth.isAuthenticated()){
      console.log("aici")
    const expectedRole = route.data.expectedRole;    
      if(this.auth.isAuthenticatedAs(expectedRole)){
        console.log("true");
        return true;
      }

  }
  this.router.navigate(['login']);
  console.log("siaici");
  return false;

}

}
