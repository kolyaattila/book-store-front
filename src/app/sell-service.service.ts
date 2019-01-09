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


   public sell(bookCart:Array<BookCart>){
      var date =  new Date();
      this.http.post("http://localhost:8080/sell",{"date":date,"user_id":this.login.getUserId()},this.httpOptions).subscribe(data => this.sellObject=data );
      
    bookCart.forEach(element => {
      for(var i=0;i<element.cantitate;i++){
        this.http.post("http://localhost:8080/"+this.sellObject.sell_id,element.book,this.httpOptions).subscribe();
      }
    });
   }

}
