import { Component, OnInit } from '@angular/core';
let Amazon: any;    let Flipkart: any;    let Myntra: any
@Component({
  selector: 'app-making2',
  templateUrl: './making2.component.html',
  styleUrls: ['./making2.component.css']
})

export class Making2Component implements OnInit {
  Componies = [
  Amazon= {
    name:"Amazon",
    Title: "It's from Amazon",
    ProductTypeMen: ["It's From Amazon", "Shirts", "T-Shirts", "Shooes", "Watchs", "Wallets"],
    ProductTypeWomen: ["Shuits", "Lhanga-Choli", "Shooes", "Watchs", "Wallets", "Saree"],
    Description:"This Collection Creat By Amazon."
  },
  Flipkart = {
    name:"Flipkart",
    Title: "It's from Flipkart",
    ProductTypeMen: ["It's From Flipkart", "Shirts", "T-Shirts", "Shooes", "Watchs", "Wallets"],
    ProductTypeWomen: ["Shuits", "Lhanga-Choli", "Shooes", "Watchs", "Wallets", "Saree"],
    Description:"This Collection Creat By Flipkart."
  },
  Myntra = {
    name:"Myntra",
    // Title: "It's from Myntra",
    Title: "It's from Myntra",
    ProductTypeMen: ["It's From Myntra", "Shirts", "T-Shirts", "Shooes", "Watchs", "Wallets"],
    ProductTypeWomen: ["Shuits", "Lhanga-Choli", "Shooes", "Watchs", "Wallets", "Saree"],
    Description:"This Collection Creat By Myntra."
  }
  ]
  Alert(compony:any, product:any){
    alert(`Your Click on ${compony} - ${product} is Work Correctly`);
  };
  DescriptionAlert(description:any){
    window.alert(`Your Click On ${description} is Work Correctly`);
  }
  constructor() { }

  ngOnInit(): void {
  }

}