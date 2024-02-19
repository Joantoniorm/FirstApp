import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";
@Component({
  selector: 'app-product-alerts',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css'
})
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
