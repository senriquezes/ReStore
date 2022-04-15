export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  pictureURL: string;
  type?: string;
  brand: string;
  quantityImStock?: number;
}
