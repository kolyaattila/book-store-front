import { Component, OnInit } from '@angular/core';
import {MessageService} from 'src/app/message.service';
import {Message} from 'src/app/Message';
import { CommonModule } from "@angular/common";
import * as $ from "jquery";
import { delay } from 'q';
import { SellService } from '../sell-service.service';

@Component({
  selector: 'bs-admin',
  templateUrl: './admin.component.html',
  styleUrls:['./sb-admin.css','./bootstrap.min.css']
})
export class AdminComponent implements OnInit {
  messages:Message[];
  sales:any;
  messageTabelActive:boolean=true;
  orderTabelActive:boolean=false;
  updateDate:Date;
  rowAddDetail={
    'id':-1,
    'active':false
  };
  mesageSelected:Message;
  sellDetalis={
    user:null,
    inventoryEntityList:[],
    active:false
  }



  constructor(private dataMessage: MessageService,private sell:SellService) { }

  ngOnInit() {
    this.dataMessage.getMessages().subscribe(data => this.messages=data);
    this.updateDate=new Date();
    this.sell.getSales().subscribe(data => this.sales=data);
  }

  valideMessage(){
    this.messageTabelActive=true;
    this.orderTabelActive=false;
    this.updateDate=new Date();
    
  }

  valideOrders(){
    this.messageTabelActive=false;
    this.orderTabelActive=true;
    this.updateDate=new Date();
    
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
    
    this.messages.forEach(element => {
      if(element.id==id)
        this.mesageSelected=element;
    });
    
    if(this.rowAddDetail.active){
      if(this.rowAddDetail.id==id){
        $('#dataTable > tbody > tr').eq(this.rowAddDetail.id).remove();
        this.rowAddDetail.id=-1;
        this.rowAddDetail.active=false;
      }
      else{
        $('#dataTable > tbody > tr').eq(this.rowAddDetail.id).remove();
        $('#dataTable > tbody > tr').eq(id-1).after('<tr id="append"><td colspan="5"><b>Message:</b> ' + this.mesageSelected.message +' </td></tr>');
        this.rowAddDetail.id=id;
      }

    }
    else{
      
        console.log("haha");
        $('#dataTable > tbody > tr').eq(id-1).after('<tr id="append"><td colspan="5"><b>Message:</b> ' + this.mesageSelected.message +'</td></tr>');
        //$('#append > td').append(this.mesageSelected.message.toString());
        this.rowAddDetail.id=id;
        this.rowAddDetail.active=true;
      
    }
  }

  selectUser(user,inventoryEntityList){
    this.sellDetalis.active=true;
    this.sellDetalis.user=user;
    this.sellDetalis.inventoryEntityList=inventoryEntityList;
  }


}
