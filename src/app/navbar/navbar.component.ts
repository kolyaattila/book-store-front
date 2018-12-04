import { Component, OnInit } from '@angular/core';
import {Router,NavigationEnd} from '@angular/router';

@Component({
  selector: 'bs-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  currentUrl :String;
  constructor(private router:Router) {
    router.events.subscribe((_:NavigationEnd) => this.currentUrl = _.url);
   }

  ngOnInit() {
  }

}
