import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css','./clean-blog.min.css']
})
export class AboutComponent implements OnInit {
  imagine:string = "https://www.google.ro/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjJgbzl86veAhWET8AKHescD8sQjRx6BAgBEAU&url=https%3A%2F%2Felgar.blog%2F2014%2F02%2F03%2Felgar-book-reviews%2F&psig=AOvVaw388v6dYjxyEUItyJuB7FeD&ust=1540911218275862";


  constructor() {
    
   }

  ngOnInit() {
   
  }

}
