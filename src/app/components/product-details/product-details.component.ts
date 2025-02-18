import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../../models/products';
import { CartService } from '../../services/cart.service';
import { Provider } from "../../models/providers";
import { ProvidersService } from "../../services/providers.service";


@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css',
    standalone: false
})
export class ProductDetailsComponent {

  product: Product | undefined;

  provider: Provider | undefined;

  constructor (
     private route: ActivatedRoute,
    private cartService: CartService,
    private providersService: ProvidersService
    ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);

    this.providersService.getProviders().subscribe((providerService) => {
      this.provider = providerService.find(p => p.id === this.product?.provider);
      });
  
  }
  addToCart(product : Product) {
    this.cartService.addToCart(product);
    this.cartService.sumCantidad();
    window.alert('Producto añadido al carro');
  }
}
