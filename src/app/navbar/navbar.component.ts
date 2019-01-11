import { Component, OnInit } from '@angular/core';
import {Router,NavigationEnd} from '@angular/router';
import {LoginService} from 'src/app/login-service.service'
import {RoleGuardService} from 'src/app/role-guard-service.service'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'bs-navbar',
  templateUrl: './navbar.component.html',
  styleUrls:['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUrl :String;
  constructor(private router:Router,
              public loginService : LoginService,
              public roleGuradService:RoleGuardService,
              private toastr:ToastrService) {
    router.events.subscribe((_:NavigationEnd) => this.currentUrl = _.url);
   }
   
  ngOnInit() {
    console.log(this.loginService.isAuthenticatedAs("admin"));
  }

  logout(){
    this.toastr.success('','Logout succes');
    console.log("here");
    localStorage.setItem('token',"");
    this.router.navigate(['/']);
    
  }

}
