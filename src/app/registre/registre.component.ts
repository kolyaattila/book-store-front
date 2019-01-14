import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../login-service.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'bs-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
  register = new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',[Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),Validators.required,Validators.minLength(7)]),
    lastName: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(3)]),
    firstName: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(3)]),
    confirm_password :new FormControl('',[Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'),Validators.required,Validators.minLength(7)]),
    address:new FormControl('',[Validators.minLength(5),Validators.required]),
    city:new FormControl('',[Validators.minLength(3),Validators.pattern('^[a-zA-Z]+$'),Validators.required]),
    phone: new FormControl('',[Validators.pattern('^[0-9-+s()]*$'),Validators.minLength(9),,Validators.required,Validators.maxLength(12)]),
    country: new FormControl('',[Validators.minLength(3),Validators.pattern('^[a-zA-Z]+$'),Validators.required]),
    zipCode:new FormControl('',[Validators.minLength(6),Validators.pattern('^[0-9-+()]*$'),Validators.required])
  });
  constructor(private toastr:ToastrService,private signup:LoginService,private route:Router) { }

  ngOnInit() {
  }

  submit(){
    if(this.register.valid  && this.register.get('password').value==this.register.get('confirm_password').value)
      this.signup.signup(this.register.value).subscribe(
        (data) => {
          this.toastr.success('','Account was created');
          this.route.navigate(['/login']);
        },
        (err) => {
            this.toastr.error('','Error create account');
        }
      );
    else
      this.toastr.error('','Invalid data')
  }

}
