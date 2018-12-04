import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse}from '@angular/common/http';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Book} from 'src/app/Book'
import{Author} from 'src/app/Author'


@Injectable({
  providedIn: 'root'
})
export class AuthorServiceService {

  constructor(private http : HttpClient) {  }

  getAuthors() :Observable<Author[]>{
      return this.http.get<Author[]>('http://localhost:8080/author/authors')
    }
  getBooks(id:Number):Observable<Book[]>{
    return this.http.get<Book[]>('http://localhost:8080/author/'+id+'/books');
  }
  getBooksByCategory(id:Number,category:String):Observable<Book[]>{
    return this.http.get<Book[]>('http://localhost:8080/author/'+id+'/books/'+category);
  }
  getBooksByPrice(id:Number,minPrice:Number,maxPrice:Number):Observable<Book[]>{
    return this.http.get<Book[]>('http://localhost:8080/author/'+id+'/books/'+minPrice+'/'+maxPrice);
  }

  getBooksByPriceAndCategory(id:Number,minPrice:Number,maxPrice:Number,category:String):Observable<Book[]>{
    return this.http.get<Book[]>('http://localhost:8080/author/'+id+'/books/'+minPrice+'/'+maxPrice+"/"+category);
  }


}
