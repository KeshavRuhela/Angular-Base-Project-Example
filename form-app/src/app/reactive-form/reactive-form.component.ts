import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ForLoginService } from '../for-login.service';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  // [x: string]: any;
   email = new FormControl('');

  loginForm = new FormGroup({
    email: new FormControl({value:"", disabled: true}),
    message: new FormControl(`for registration your name`),
    submit: new FormControl('')
  })
  sendMail() {
    alert("Mail send");
  }
  constructor(private loginService: ForLoginService) {
   
  }

  ngOnInit(): void {
    this.loginService.selectedEmailId.subscribe(
      value => {
        debugger;
        this.loginForm.patchValue({
          email : value
        })
        console.log(value);
      })
  }

}
