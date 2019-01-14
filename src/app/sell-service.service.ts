import { Injectable } from '@angular/core';
import { LoginService } from './login-service.service';
import { BookCart } from './BookCart';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { element } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class SellService {
  sellObject:any;
  constructor(private login:LoginService,
              private http:HttpClient) {
   }

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };


  
  
  addIventary(bookCart:Array<BookCart>){
    this.sell().subscribe( sellObject => {
      this.sellObject=sellObject;
      bookCart.forEach(element => {
      for(var i=0;i<element.cantitate;i++){
        console.log(element.book);
        this.http.post("http://localhost:8080/inventory/sell/"+this.sellObject.sellId,element.book,this.httpOptions).subscribe();
      }
      });
    });
  }

  getSales(){
    return this.http.get("http://localhost:8080/sell/sales");
  }
  
  private sell(){
     return  this.http.get("http://localhost:8080/sell/user/"+this.login.getUserId()); 
  }


}
