import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'bs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./icon-font.min.css',
  './animate.css',
  './hamburgers.min.css',
  'animsition.min.css',
  './select2.min.css',
  './daterangepicker.css',
  './util.css',
  './main.css']
})
export class LoginComponent implements OnInit {

  constructor(private toastr:ToastrService) { }

  login = new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)])
  });



  ngOnInit() {

    //https://www.youtube.com/watch?v=fj8M-3vEVLc  good pratcice
  }


  onSubmit(){
    this.toastr.success('Hello world!', 'Toastr fun!');
    console.log("hello");
    //nu functioneaza inca
  }


}
