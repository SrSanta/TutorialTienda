import { Component } from '@angular/core';

import { Product } from '../../models/products';
import { ProductService } from '../../services/product.service';
import { ProductProvider } from '../../models/productsProviders';


@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    standalone: false
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductos().subscribe(products => {
      this.products = products;
    });
  }

  share() {
    window.alert('El producto ha sido compartido');
  }

  onNotify() {
    window.alert('Te avisa cuando este de oferta');
  }
}