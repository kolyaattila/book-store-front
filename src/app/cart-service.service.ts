import { Injectable } from '@angular/core';
import { Book } from './Book';
import { BookCart } from './BookCart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  books:Array<BookCart>=[];
  
  constructor() { }

  addBook(book:Book){
    //console.log(book);
    if(this.books.find(function(bookcart){
      if(bookcart.book.bookId==book.bookId){
        bookcart.cantitate=1+bookcart.cantitate;
        return true;}})){
    }
    else{
      this.books.push(new BookCart(book,1,false));
    }
    console.log(this.books);
  }

  remove(book:Book){
    this.books=this.books.filter(function(element){
      if(element.book.bookId!=book.bookId)
        return true;
      else 
        return false;
    });
  }


}
