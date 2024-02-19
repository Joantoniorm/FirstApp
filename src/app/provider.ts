import {Product} from "./products";

export interface Provider {
  id: number;
  name: string;
  details: string;
  products: Product[];
}