import { Injectable } from '@angular/core';
import { Product } from '../models/products';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items : {product: Product, cantidad: number}[] = [];

cant : number = 0;
private cantItems = new BehaviorSubject<number>(this.cant);
cantItems$ = this.cantItems.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  addToCart( product: Product) {
    const existingItem = this.items.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.cantidad++;
    } else {
      this.items.push({ product, cantidad: 1 });
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('assets/shipping.json')
  }

  sumCantidad() {
    this.cantItems.next(this.cantItems.value + 1);
  }

  getCosteTotal() {
    return this.items.reduce((acc, product) => acc + product.product.price, 0);
  }
}
