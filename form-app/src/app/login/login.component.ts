import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ForLoginService } from '../for-login.service';
let key:string;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  isError = false;
  // ..............this is a form group for loginn form in reactive approach....................
  loginId=new FormGroup({
    userName :new FormControl("keshav",Validators.required),
    userPass :new FormControl("pass")
  })

  
  ngOnInit(): void {
  }
  // constructor(private modalService: NgbModal,private router : Router) {} 
  closeResult!: string;
  
  constructor(private modalService: NgbModal,private router : Router, private userdata:ForLoginService ) {} 
  
    //............use for sending data......................

  sendData(username: string){
    localStorage.setItem(key,`username:${this.loginId.value.userName} Password : ${this.loginId.value.userPass}`);
    if(localStorage.getItem(key) != `username:keshav Password : pass`){
        alert("Your UserName or Password Is Incorrect");
    }
    else{
      this.router.navigateByUrl("/final");
    //  console.log(username)
    debugger;
    this.userdata.userData(username).subscribe(res=>{
      console.log("response is ", res);
      localStorage.setItem(key,JSON.stringify(res));
      
    },
       
     err=>{
          console.log("Http Error",err); 
    },
    ()=> console.log("Http Request Completed.")
    )
    // this.router.navigateByUrl("final");
  }
}

  // event(username:string){
  //   localStorage.setItem(key,username)
  //   debugger;
  //   alert("hello")
  //   console.log(username);
  //   this.userdata.userData(username);
  //   // alert("Now You Are able to Send Mail");
  // }  
}  
   //...............................For taking user name value in sendData function.........................
               // console.log(this.loginId.value.userName); 




