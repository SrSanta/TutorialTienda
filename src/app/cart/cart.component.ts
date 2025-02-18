import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
    standalone: false
})
export class CartComponent {

  precioTransporte = 0;
  totalPrecio: number = this.cartService.getCosteTotal();

  shippingPrices!: Observable <{type: string, price: number}[]>;

  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '' 
  });

  constructor (
    private cartService : CartService,
    private formBuilder : FormBuilder
  ){}

  ngOnInit(): void {
    this.shippingPrices = this.cartService.getShippingPrices();
  }

  onSubmit() : void  {
    this.items = this.cartService.clearCart();
    console.warn(' pedido enviado', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  actualizarTotal(): void {
    this.totalPrecio = this.cartService.getCosteTotal() + Number(this.precioTransporte);
  }
}
