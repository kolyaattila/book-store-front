import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import {LoginService} from 'src/app/login-service.service'
import decode from 'jwt-decode';

@Injectable(
  {providedIn: 'root'}
  )
export class RoleGuradService implements CanActivate {

  constructor(public auth: LoginService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot){
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;

    const token = localStorage.getItem('token');

    // decode the token to get its payload
    const tokenPayload = decode(token);

    if (!this.auth.isAuthenticated() || tokenPayload.role !== expectedRole) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
