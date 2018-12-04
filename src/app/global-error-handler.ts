import { Injectable, Injector,ErrorHandler } from '@angular/core';
import {  Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import {ErrorComponent} from 'src/app/error/error.component'

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  errorComponent :ErrorComponent;
  constructor(private injector:Injector ) {
    this.errorComponent=new ErrorComponent();
   }

   handleError(error: any): void{
     console.log(error);
    const router = this.injector.get(Router);
    console.log('Request URL:', router.url);
    if(error instanceof HttpErrorResponse){
      console.log('Backend returned status code:',error.status);
      console.log('Body:',error.message);
      this.errorComponent.setErrorNumber(error.status); 
    }
    else{
      console.log('An error occurred:',error.message); 
      this.errorComponent.setErrorNumber(error.status); 
    }
    router.navigate(['error']);
   }

 
}
