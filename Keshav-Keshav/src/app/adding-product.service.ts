import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddingProductService {
  Product: any=[];
  items: any;
  
  addToCart(product: any) {
    this.Product.push(product);
  }
  getItems() {
    return this.Product;
  }
  clearCart() {
    this.Product = [];
    return this.Product;
  }

  constructor() { }
}
