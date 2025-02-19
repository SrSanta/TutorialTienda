import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/products';
import { ProductProvider } from '../models/productsProviders';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://localhost:3000/productos';
  url2 = 'http://localhost:3001/proveedores';

  products: Product[] = [];
  products2: Product[] = [];

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get<Product[]>(this.url);
  }

  getProducto(id: string) {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  getProveedores(){
    return this.http.get<ProductProvider[]>(this.url2);
  }

  getProveedor(id: number) {
    return this.http.get<ProductProvider>(`${this.url2}/${id}`);
  }
}
