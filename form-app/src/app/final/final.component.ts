// import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {
  // [x: string]: any;
  constructor(private router : Router) {}

  logOut(){
    localStorage.clear();
    this.router.navigateByUrl('logOut');
  }

  ngOnInit(): void {
  }

}
