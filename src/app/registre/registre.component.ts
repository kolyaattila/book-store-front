import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'bs-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
  register = new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(7),Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z])")]),
    last_name: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(3)]),
    first_name: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(3)]),
    confirm_password :new FormControl('',[Validators.required,Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$'),Validators.minLength(7)]),
    address:new FormControl('',[Validators.minLength(5),Validators.required]),
    city:new FormControl('',[Validators.minLength(3),Validators.pattern('^[a-zA-Z]+$'),Validators.required]),
    phone: new FormControl('',[Validators.minLength(9),Validators.pattern('^[0-9-+s()]*$'),Validators.required,Validators.maxLength(12)]),
    country: new FormControl('',[Validators.minLength(3),Validators.pattern('^[a-zA-Z]+$'),Validators.required]),
    zipcode:new FormControl('',[Validators.minLength(6),Validators.pattern('^[0-9-+()]*$'),Validators.required])
  });
  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log("hahas")
    if(this.register.valid)
      console.log(this.register.value);
    else
      console.log(this.register.value)
  }

}
