import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items; 
  checkoutForm;
  constructor(
    private cartService: CartService,
    private fromBuilder: FormBuilder
  ) { 
    this.checkoutForm = this.fromBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  removeItem(product){
    this.items = this.cartService.removeItem(product);
  }

  onSubmit(customerData){
    // Process checkout data here
    this.items = this.cartService.clearCart;
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }
}