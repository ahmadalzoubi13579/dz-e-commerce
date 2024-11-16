'use client';

import { FC, useState } from 'react';

import { ContainerProps } from '~/src/types/next';
import { CartItem } from './models';
import { CartContext } from './CartContext';

const CartProvider: FC<ContainerProps> = ({ children }) => {
  const [products, setProducts] = useState<CartItem[]>([]); // check local storage

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

        return newProducts;
      } else {
        newProducts = [
          ...prevState,
          {
            ...product,
            quantity: 1,
          },
        ];

        return newProducts;
      }
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

        return newProducts;
      } else {
        return prevState;
      }
    });
  };

  const removeProduct = (productId: string) => {
    setProducts(prevState => prevState.filter(item => item.id !== productId));
  };

  const clearCart = () => {
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
