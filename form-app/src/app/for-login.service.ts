import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { url } from './constants';
@Injectable({
  providedIn: 'root'
})
export class ForLoginService {
  [x: string]: any;

  selectedEmailId = new BehaviorSubject<String>("");
  userFilData = new BehaviorSubject<string>("");

  constructor(private http: HttpClient) { }
  // .........................   It send email id to send mail form    .......................
  showDefaultMailId(mailId: string) {
    this.selectedEmailId.next(mailId);
  }

  // .........................   It send User name and Password   .......................
  userData(userName: string) {
    // console.log(userName)
    return this.http.post("http://localhost:8088/authenticate", JSON.parse(userName))
       .pipe(
         //catchError
      )
  }

  // ....................    
  // getBackendData(): Observable<Object> {
  //   return this.http.get(url);
  // }
}



