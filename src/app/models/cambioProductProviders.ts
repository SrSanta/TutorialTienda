export interface Producto {
  id: number;
  name: string;
  price: number;
  description: string;
  provider: number;
}

export interface Proveedor {
  product_id: string;
  product_name: string;
  cost: number;
  details: string;
  supplier: number;
}
