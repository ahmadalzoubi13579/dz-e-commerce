'use client';

import { FC, useState } from 'react';

import { ContainerProps } from '~/src/types/next';
import { CartItem } from './models';
import { CartContext } from './CartContext';
import { getLocaleStorage, setLocaleStorage } from '~/src/app/shared/helpers/locale-storage';

const CartProvider: FC<ContainerProps> = ({ children }) => {
  const [products, setProducts] = useState<CartItem[]>(getLocaleStorage('cart') ?? []);

  // console.log('cart products:', products);

  const incProduct = (product: Omit<CartItem, 'quantity'>) => {
    setProducts(prevState => {
      let newProducts: CartItem[] = [];

      const productIndex = prevState.findIndex(item => item.id === product.id);
      if (productIndex !== -1) {
        newProducts = [...prevState];

        newProducts[productIndex] = {
          ...newProducts[productIndex],
          quantity: newProducts[productIndex].quantity ? newProducts[productIndex].quantity + 1 : 1,
        };
      } else {
        newProducts = [
          ...prevState,
          {
            ...product,
            quantity: 1,
          },
        ];
      }

      setLocaleStorage('cart', newProducts);
      return newProducts;
    });
  };

  const decProduct = (productId: string) => {
    setProducts(prevState => {
      let newProducts: CartItem[] = [];

      const productIndex = prevState.findIndex(item => item.id === productId);
      if (productIndex !== -1) {
        newProducts = [...prevState];

        newProducts[productIndex] = {
          ...newProducts[productIndex],
          quantity:
            newProducts[productIndex].quantity && newProducts[productIndex].quantity >= 2
              ? newProducts[productIndex].quantity - 1
              : 1,
        };
      } else {
        newProducts = [...prevState];
      }

      setLocaleStorage('cart', newProducts);
      return newProducts;
    });
  };

  const removeProduct = (productId: string) => {
    setProducts(prevState => {
      const newProducts = prevState.filter(item => item.id !== productId);

      setLocaleStorage('cart', newProducts);
      return newProducts;
    });
  };

  const clearCart = () => {
    setLocaleStorage('cart', []);
    setProducts([]);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        incProduct,
        decProduct,
        removeProduct,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
