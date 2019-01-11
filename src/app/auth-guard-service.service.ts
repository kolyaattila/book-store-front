import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router ,CanActivate} from '@angular/router';
import { LoginService } from './login-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public auth: LoginService, public router: Router,public jwtHelper: JwtHelperService) {}


  canActivate(route: ActivatedRouteSnapshot){
    if(this.auth.isAuthenticated()){
      this.router.navigate(['/']);
      return false;
    }
    else
    {
      return true;
    }

}

}
