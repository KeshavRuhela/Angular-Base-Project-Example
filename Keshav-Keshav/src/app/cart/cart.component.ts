import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddingProductService } from '../adding-product.service';


// loginId=new FormGroup({
//   userName :new FormControl("keshav",Validators.required),
//   userPass :new FormControl("pass")
// })

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  addData = new FormGroup({
    productName: new FormControl(''),
  })
  

  constructor( private cartService:AddingProductService) { }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit(): void {
  }

}
