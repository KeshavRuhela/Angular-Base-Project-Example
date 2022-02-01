import {Component } from '@angular/core';    
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { Subject } from 'rxjs';
import { ForLoginService } from '../for-login.service';
    
export class MyItems {    
  Value: string;   
  Value2: string; 
  Value3: string; 
  Value4: string; 
  Value5: string; 
  Value6: string; 
  constructor(Value2:string, Value:string,Value3:string, Value4:string, Value5:string, Value6:string)    
  {    
    this.Value  = Value;    
    this.Value2 = Value2;    
    this.Value3 = Value3;    
    this.Value4 = Value4;    
    this.Value5 = Value5;    
    this.Value6 = Value6;    
  }    
}    
@Component({    
  selector: 'registration-root',    
  templateUrl: './registration.component.html',    
  styleUrls: ['./registration.component.css']    
})    
export class RegistrationComponent  {
  [x: string]: any;    
    
  // Used To Specify Title using Interpolation    
  title = 'Working With Array In Angular 5';    
    
  // Array where we are going to do CRUD operations    
  myItems: MyItems[] = new Array();    
    
  // Other variables    
  IsForUpdate: boolean = false;    
  newItem: any = {};    
  AddItem() 
    {    
      this.myItems.push(    
        this.newItem    
      );    
      this.newItem = {};    
    }  
  DeleteItem(f: number) {  
      this.myItems.splice(f, 1); 
      because_Error_so_I_use();
  } 
  DeleteItemMultiple(f: any){
    this.myItems.splice(f); 
    because_Error_so_I_use();
  }
  openMailBoxPopup(mail_Id:string){ 
  }
  closeResult!: string;

  constructor(private modalService: NgbModal,private router : Router,private loginService : ForLoginService) {} 

  mail(content:any,mailId:string){
    this.loginService.showDefaultMailId(mailId);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    },(reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }
}    
function because_Error_so_I_use() {
  console.log("Running well")
  throw new Error('Function not implemented.');
}