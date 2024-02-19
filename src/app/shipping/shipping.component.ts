import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { CartService } from "../cart.service";
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export class ShippingComponent implements OnInit {
  shippingCosts!: Observable<{type: string, price: number}[]>;
  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
