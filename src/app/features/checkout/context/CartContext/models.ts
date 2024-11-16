import { CheckoutItem } from '~/src/types/app';

export interface CartItem extends CheckoutItem {
  name: string;
  price: number;
  image: string;
}

export interface CartModel {
  products: CartItem[];
}
