import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;
import {Injector} from '@angular/core';
import { Observable } from 'rxjs';
import{Message} from 'src/app/Message'; 
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient,private injector:Injector) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  getMessages():Observable<Message[]>{
    return this.http.get<Message[]>("http://localhost:8080/message/messages");
  }

  getMessage(id:number):Observable<Message>{
    return this.http.get<Message>("http://localhost:8080/message/"+id);
  }

  updateMessages(message:Message){
    this.http.post("http://localhost:8080/message",message,this.httpOptions).subscribe();
  }

  setRead(id:Number){
    console.log("merge");
    this.http.put("http://localhost:8080/message/read",id).subscribe();
  }

}
