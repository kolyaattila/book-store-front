import { Component, OnInit } from '@angular/core';
import {Router,NavigationEnd} from '@angular/router';
import {LoginService} from 'src/app/login-service.service'
import {RoleGuradService} from 'src/app/role-gurad-service.service'
@Component({
  selector: 'bs-navbar',
  templateUrl: './navbar.component.html',
  styleUrls:['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUrl :String;
  constructor(private router:Router,public loginService : LoginService,public roleGuradService:RoleGuradService) {
    router.events.subscribe((_:NavigationEnd) => this.currentUrl = _.url);
   }
   
  ngOnInit() {
    
  
  }

}
