import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { ProvidersService } from "../providers.service";
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-product-providers',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './product-providers.component.html',
  styleUrl: './product-providers.component.css'
})
export class ProductProvidersComponent implements OnInit{
  providers!: Observable<{id: number, name: string, details: string}[]>;

  constructor(private providerService: ProvidersService) {
  }

  ngOnInit(): void {
    this.providers = this.providerService.getProviders();
  }
}
