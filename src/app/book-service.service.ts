import {HttpClient} from '@angular/common/http' 
import { Observable, throwError } from 'rxjs';
import {Book} from 'src/app/Book';
import {catchError} from "rxjs/internal/operators";
import { Injectable, Injector,ErrorHandler } from '@angular/core';
import {  Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import {ErrorComponent} from 'src/app/error/error.component'



@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  errorComponent :ErrorComponent;
  constructor(private http: HttpClient,private injector:Injector) {
    this.errorComponent=new ErrorComponent();
  }

  
 

//https://blog.angular-university.io/rxjs-error-handling/
//https://grokonez.com/frontend/angular/angular-6/error-handler-angular-6-httpclient-catcherror-retry-with-node-js-express-example


  getBooks() : Observable<Book[]>{
  return this.http.get<Book[]>('http://localhost:8080/book/books');
  // .pipe(
  //   catchError((err: any, caught: Observable<any>)=>
  //   {return throwError(this.generalErrorHandler(err, caught))}
  // ));
  }


  getBooksMinPrice(minPrice:Number):Observable<Book[]>{
    return this.http.get<Book[]>('http://localhost:8080/book/minPrice/'+minPrice);
  }

  getBooksPriceBetween(minPrice:Number,maxPrice:Number):Observable<Book[]>{
    return this.http.get<Book[]>('http://localhost:8080/book/PriceBetween/'+minPrice+'/'+maxPrice);
  }

  getCategories():Observable<any>{
    return this.http.get('http://localhost:8080/book/categories');
  }

  getBooksByCategory(category :String):Observable<Book[]>{
    return this.http.get<Book[]>('http://localhost:8080/book/'+category);
  }

  getBooksByCategoryAndPrice(category :String,minPrice:number,maxPrice:number):Observable<Book[]>{
    return this.http.get<Book[]>('http://localhost:8080/book/'+minPrice+"/"+maxPrice+"/"+category);
  }



  // private generalErrorHandler(error: any, caught: Observable<any>): Observable<any> {
  //   console.log('ba esti prost',error);
  //  const router = this.injector.get(Router);
  //  console.log('Request URL:', router.url);
  //  if(error instanceof HttpErrorResponse){
  //    console.log('Backend returned status code:',error.status);
  //    console.log('Body:',error.message);
  //    this.errorComponent.setErrorNumber(error.status); 
  //  }
  //  else{
  //    console.log('An error occurred:',error.message); 
  //    this.errorComponent.setErrorNumber(error.status); 
  //  }
  //  router.navigate(['error']);
  //  return error;
  // }


}


