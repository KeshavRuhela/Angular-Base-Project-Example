import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUp= new FormGroup({
    user_S_Name: new FormControl(),
    user_S_Email:new FormControl(),
    user_S_Pass: new FormControl(),
  })
    
  constructor() { }

  ngOnInit(): void {
  }

}
