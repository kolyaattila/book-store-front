import { Component, OnInit } from '@angular/core';
import {MessageService} from 'src/app/message.service';
import {Message} from 'src/app/Message';
import { CommonModule } from "@angular/common";
import * as $ from "jquery";

@Component({
  selector: 'bs-admin',
  templateUrl: './admin.component.html',
  styleUrls:['./sb-admin.css','./bootstrap.min.css']
})
export class AdminComponent implements OnInit {
  messages:Message[];
  messageTabelActive:boolean=true;
  updateDate:Date;
  rowAddDetail={
    'id':-1,
    'active':false
  };
  mesageSelected:Message;

  constructor(private dataMessage: MessageService) { }

  ngOnInit() {
    this.dataMessage.getMessages().subscribe(data => this.messages=data);
    this.updateDate=new Date();
  }

  valideMessage(){
    this.messageTabelActive=true;
    this.updateDate=new Date();
    this.updateDate.getMonth
  }

  messageClick(id){
    this.messages.forEach( message => {
      if(message.id==id && message.read==false){
        message.read=true;
        this.dataMessage.setRead(id);
      }
    });
  }

  addRow(id){
    if(this.rowAddDetail.active){
      if(this.rowAddDetail.id==id){
        $('#dataTable > tbody > tr').eq(this.rowAddDetail.id).remove();
        this.rowAddDetail.id=-1;
        this.rowAddDetail.active=false;
      }
      else{
        $('#dataTable > tbody > tr').eq(this.rowAddDetail.id).remove();
        this.dataMessage.getMessage(id).subscribe(data => this.mesageSelected=data);
        $('#dataTable > tbody > tr').eq(id-1).after('<tr id="append"><td colspan="5"><b>Message:</b>  </td></tr>');
        this.rowAddDetail.id=id;
      }

    }
    else{
      this.dataMessage.getMessage(id).subscribe(data => this.mesageSelected=data);
      $('#dataTable > tbody > tr').eq(id-1).after('<tr id="append"><td colspan="5"><b>Message:</b>  </td></tr>');
      //$('#append > td').append(this.mesageSelected.message.toString());
      this.rowAddDetail.id=id;
      this.rowAddDetail.active=true;
    }
  }

}
