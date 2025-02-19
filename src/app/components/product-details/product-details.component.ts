import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/products';
import { CartService } from '../../services/cart.service';
import { Provider } from "../../models/providers";
import { ProvidersService } from "../../services/providers.service";
import { ProductService } from "../../services/product.service";


@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css',
    standalone: false
})
export class ProductDetailsComponent {

  product: Product | undefined;

  products: Product[] = [];

  provider: Provider | undefined;

  constructor (
     private route: ActivatedRoute,
    private cartService: CartService,
    private providersService: ProvidersService,
        private productService: ProductService
    ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.productService.getProductos().subscribe((products) => {
      this.products = products;
    });

    this.product = this.products.find(product => product.id === productIdFromRoute);

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
