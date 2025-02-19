import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Provider } from "../../models/providers";
import { ProvidersService } from "../../services/providers.service";
import { Product } from '../../models/products';
import { RouterLink } from '@angular/router';
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-providers-details",
  imports: [RouterLink],
  templateUrl: "./providers-details.component.html",
  styleUrl: "./providers-details.component.css",
})
export class ProvidersDetailsComponent {
  provider: Provider | undefined;
  products: Product[] = [];

  constructor(
    private providersService: ProvidersService,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const providerIdFromRoute = Number(routeParams.get("providerId"));
    this.productService.getProductos().subscribe((products) => {
      this.products = products;
    });

    this.providersService.getProviders().subscribe((providerService) => {
      this.provider = providerService.find(
        (provider) => provider.id === providerIdFromRoute
      );
    });

    this.products = this.products.filter(product => product.provider === providerIdFromRoute);
    console.log(this.products);
  }
}
