'use client';

import { createContext } from 'react';
import { CartItem, CartModel } from './models';
import { getLocaleStorage } from '~/src/app/shared/helpers/locale-storage';

const cart: CartModel = {
  products: getLocaleStorage('cart') ?? [],
};

const CartContext = createContext({
  products: cart.products, // check local storage
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  incProduct: (product: Omit<CartItem, 'quantity'>) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  decProduct: (productId: string) => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeProduct: (productId: string) => {},
  clearCart: () => {},
});

export { CartContext };
