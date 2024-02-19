import {Component} from '@angular/core';
import { Providers } from '../../assets/providers.json';
import {Provider} from "../provider";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-provider-details',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './provider-details.component.html',
  styleUrl: './provider-details.component.css'
})
export class ProviderDetailsComponent {
  provider: Provider | undefined;

  constructor(private route: ActivatedRoute) {
  }
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const providerIdFromRoute = Number(routeParams.get('providerId'));

    this.provider = Providers.find(pro => pro.id === providerIdFromRoute);
  }
}
