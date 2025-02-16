import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
    standalone: false
})
export class CartComponent {

  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '' 
  });

  constructor (
    private cartService : CartService,
    private formBuilder : FormBuilder
  ){}

  onSubmit() : void  {
    this.items = this.cartService.clearCart();
    console.warn(' pedido enviado', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
