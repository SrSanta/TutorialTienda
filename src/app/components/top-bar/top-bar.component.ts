import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css'],
    standalone: false
})
export class TopBarComponent {

    cantidad = 0;

    constructor(private cart: CartService){}

    ngOnInit() {
        this.cart.cantItems$.subscribe((cantidad) => {
            this.cantidad = cantidad;
    });
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/