import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ForLoginService } from './for-login.service';
let key:any|null;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // [x: string]: any;
  title = 'form-app';
  // email = new FormControl('');
  closeResult!: string;
  constructor(private modalService: NgbModal,private router : Router, private service:ForLoginService) {} 

  open(content: any) {
    // let many:any =key;
  
    if(localStorage.getItem(key) != `username:keshav Password : pass`){
      // if( localStorage.getItem('token') != null)
      this.router.navigateByUrl('login');
    }else{  
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
      // localStorage.clear();
    } 
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


//   ngOnInit(): void {
//     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
//     //Add 'implements OnInit' to the class.
//     this.service.getBackendData().subscribe(res=>{
//       // alert(res);
//   } )
// }
}

