import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/products';
import { forkJoin, Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Producto, Proveedor } from '../models/cambioProductProviders';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://localhost:3000/productos';
  url2 = 'http://localhost:3001/proveedores';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Product[]> {
    return forkJoin([
      this.http.get<Producto[]>(this.url),
      this.http.get<Proveedor[]>(this.url2)
    ]).pipe(
      map(([productosData, proveedoresData]) => {
        const products: Product[] = [];

        productosData.forEach(p => {
          products.push({
            id: p.id,
            name: p.name,
            price: p.price,
            description: p.description,
            provider: p.provider
          });
        });

        proveedoresData.forEach(p => {
          products.push({
            id: Number(p.product_id),
            name: p.product_name,
            price: p.cost,
            description: p.details,
            provider: p.supplier
          });
        });

        return products;
      }),
      catchError(error => {
        console.error('Error fetching products:', error);
        return of([]);
      })
    );
  }

  getProduct(id: number): Observable<Product | undefined> {
    return this.getProductos().pipe(
      switchMap(products => {
        const product = products.find(p => p.id === id || p.product_id === id.toString());
        return of(product);
      }),
      catchError(error => {
        console.error('Error fetching product:', error);
        return of(undefined);
      })
    );
  }
}
