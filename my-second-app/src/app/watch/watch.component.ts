import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
// import { nextTick } from 'process';
declare const my:any;

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  showtime(){
    // alert("Hello")
    // var x=document.getElementById('ClockContainer');
    // x.style.color="red"
  }  
  ngOnInit(): void {
  }

}
