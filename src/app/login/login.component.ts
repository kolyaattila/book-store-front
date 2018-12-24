import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login-service.service';
import {Router} from '@angular/router';
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

  constructor(private toastr:ToastrService,private loginService :LoginService,private router: Router) { }

  visibleError:boolean=true;
  Token;

  login = new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(7)])
  });



  ngOnInit() {

    //https://www.youtube.com/watch?v=fj8M-3vEVLc  good pratcice
  }


  onSubmit(){
    if(!this.login.valid)
      this.toastr.error('', 'Email or password invalid !');
    else{
      
      this.loginService.login(this.login.get('email').value,this.login.get('password').value)
                        .subscribe(
                          data => {
                            this.Token=data
                            localStorage.setItem('token',this.Token.token);
                            this.toastr.success('','Login succes');
                            this.router.navigate(['/']);
                          },
                          error => {this.toastr.error('', 'Email or password invalid !');}
                        );
    }
  }


  setVisibleErrorsEnter(){
    this.visibleError=false;
  }

  setVisibleErrorsLeave(){
    this.visibleError=true;
  }



}
