import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  checkExistStock(book:Book,numar:number){
    return this.http.post<any>("http://localhost:8080/inventory/disponible/"+numar,book,this.httpOptions);
  }

  addBooks(book,quantity:number){
    return this.http.post<any>("http://localhost:8080/inventory/addBook/"+quantity,book,this.httpOptions);
  }


}
