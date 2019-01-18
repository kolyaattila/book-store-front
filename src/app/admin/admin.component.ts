import { Component, OnInit } from '@angular/core';
import {MessageService} from 'src/app/message.service';
import {Message} from 'src/app/Message';
import { CommonModule } from "@angular/common";
import * as $ from "jquery";
import { delay } from 'q';
import { SellService } from '../sell-service.service';
import { Book } from '../Book';
import { BookServiceService } from '../book-service.service';
import { InventoryService } from '../inventory-service.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'bs-admin',
  templateUrl: './admin.component.html',
  styleUrls:['./sb-admin.css','./bootstrap.min.css']
})
export class AdminComponent implements OnInit {
  books:Book[];
  messages:Message[];
  sales:any;
  ComponentSelected={
  messageActive:true,
  orderActive:false,
  inventoryActive:false
  }
  updateDate:Date;
  rowAddDetail={
    'id':-1,
    'active':false
  };
  mesageSelected:Message;
  sellDetalis={
    active:false,
    sell:null
  };
  inventoryFormGroup = new FormGroup({
    quantity: new FormControl('',[Validators.required]),
    book : new FormControl('',[Validators.required])
  });


  constructor(private dataMessage: MessageService,
              private sell:SellService,
              private bookService:BookServiceService,
              private inventoryService:InventoryService,
              private toastr:ToastrService) { }

  ngOnInit() {
    this.dataMessage.getMessages().subscribe(data => this.messages=data);
    this.updateDate=new Date();
    this.sell.getSales().subscribe(data => this.sales=data);
    this.bookService.getBooks().subscribe(data => this.books=data);
  }

  valideMessage(){
    this.ComponentSelected.messageActive=true;
    this.ComponentSelected.orderActive=false;
    this.ComponentSelected.inventoryActive=false;
    this.updateDate=new Date();
    
  }

  valideOrders(){
    this.ComponentSelected.messageActive=false;
    this.ComponentSelected.orderActive=true;
    this.ComponentSelected.inventoryActive=false;
    this.updateDate=new Date();
    
  }

  valideInventory(){
    this.ComponentSelected.messageActive=false;
    this.ComponentSelected.orderActive=false;
    this.ComponentSelected.inventoryActive=true;
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

  selectUser(sellDetalis){
    this.sellDetalis.sell=sellDetalis;
    this.sellDetalis.active=true;
  }

  addInventory(){
    if(this.inventoryFormGroup.valid){
      let bookId=this.inventoryFormGroup.get('book').value;
      let book = this.books.find(function(this,element){
        return element.bookId==bookId;
      });
      this.inventoryService.addBooks(book,this.inventoryFormGroup.get('quantity').value).subscribe();
      this.toastr.success('','Success');
    }
    else{
      this.toastr.error('','Invalid data from input');
    }
  }

}
