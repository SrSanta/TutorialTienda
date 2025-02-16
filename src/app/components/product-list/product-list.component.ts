import { Component } from '@angular/core';

import { products } from '../../models/products';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    standalone: false
})
export class ProductListComponent {
  products = [...products];

  share() {
    window.alert('El producto ha sido compartido');
  }

  onNotify() {
    window.alert('Te avisa cuando este de oferta');
  }
}