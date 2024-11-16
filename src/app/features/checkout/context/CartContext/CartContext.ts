'use client';

import { createContext } from 'react';
import { CartItem, CartModel } from './models';

const cart: CartModel = {
  products: [],
};

const CartContext = createContext({
  products: cart.products, // check local storage
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addProduct: (product: CartItem) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deleteProduct: (productId: string) => {},
  clearCart: () => {},
});

export { CartContext };
