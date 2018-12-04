import { Component, OnInit } from '@angular/core';
import {Message} from 'src/app/Message';
import {MessageService} from 'src/app/message.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';




@Component({
  selector: 'bs-contact',
  templateUrl: './contact.component.html',
  styles: [],
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.email,Validators.required]),
    phone: new FormControl('',[Validators.required,Validators.pattern("^[0-9-+s()]*$"),Validators.maxLength(13),Validators.minLength(10)]),
    message: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(200)])
  });
  message:Message;
  success:String;
  constructor(private dataMessage:MessageService ) { }

  ngOnInit() {
    this.form.get('name').setValidators([
      Validators.pattern('^[a-zA-Z]+$'),
      Validators.maxLength(30),
      Validators.minLength(3),
      this.form.get('name').validator
]);
  }

  
  onSubmit(){
    
    this.message=this.form.value;
    
    this.form.reset();
    this.success="Success";
    this.message.date=new Date();
    this.message.read=false;
    this.dataMessage.updateMessages(this.message);
    //console.log(this.message);
  }


 
  //nu se trimite in baza de date , nu se acceseaza endpoint-ul

}
