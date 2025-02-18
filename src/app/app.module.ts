import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ShippingComponent } from './components/shipping/shipping.component';
import { ProvidersListComponent } from './components/providers-list/providers-list.component';
import { ProvidersDetailsComponent } from './components/providers-details/providers-details.component';
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";



@NgModule({ declarations: [
        AppComponent,
        TopBarComponent,
        ProductListComponent,
        ProductAlertsComponent,
        ProductDetailsComponent,
        CartComponent,
        ShippingComponent,
        
    ],
    bootstrap: [
        AppComponent
    ], imports: [BrowserModule,
        ReactiveFormsModule,
        NgForOf,
        FormsModule,
        RouterModule.forRoot([
            { path: '', component: ProductListComponent },
            { path: 'products/:productId', component: ProductDetailsComponent },
            { path: 'cart', component: CartComponent },
            { path: 'shipping', component: ShippingComponent },
            { path: 'providers', component: ProvidersListComponent },
            { path: 'providers/:providerId', component: ProvidersDetailsComponent },
        ])], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/