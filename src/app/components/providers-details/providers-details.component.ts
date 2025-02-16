import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Provider } from "../../models/providers";
import { ProvidersService } from "../../services/providers.service";
import { Product, products } from '../../models/products';
import { RouterLink } from '@angular/router';

@Component({
  selector: "app-providers-details",
  imports: [RouterLink],
  templateUrl: "./providers-details.component.html",
  styleUrl: "./providers-details.component.css",
})
export class ProvidersDetailsComponent {
  provider: Provider | undefined;
  products = [...products];

  constructor(
    private providersService: ProvidersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const providerIdFromRoute = Number(routeParams.get("providerId"));
    console.log(products);

    this.providersService.getProviders().subscribe((providerService) => {
      this.provider = providerService.find(
        (provider) => provider.id === providerIdFromRoute
      );
    });

    this.products = products.filter(product => product.provider === providerIdFromRoute);
    console.log(this.products);
  }
}
