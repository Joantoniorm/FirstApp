import { Component } from '@angular/core';
import { CartService } from "../cart.service";

import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-cart',
  standalone: true,
    imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  items = this.cartService.getItems();
  constructor(private cartService: CartService, private formBuilder: FormBuilder) {

  }

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })

  onSubmit() {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
