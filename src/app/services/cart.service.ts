import { Injectable } from '@angular/core';
import { Product } from '../models/products';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items : Product[] = [];

cant : number = 0;
private cantItems = new BehaviorSubject<number>(this.cant);
cantItems$ = this.cantItems.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  addToCart( product: Product) {
    this.items.push(product);
    this.sumCantidad();
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
    return this.items.reduce((acc, product) => acc + product.price, 0);
  }
}
