'use client';

import { FC, useState } from 'react';

import { ContainerProps } from '~/src/types/next';
import { CartItem } from './models';
import { CartContext } from './CartContext';

const CartProvider: FC<ContainerProps> = ({ children }) => {
  const [products, setProducts] = useState<CartItem[]>([]); // check local storage

  const addProduct = (product: CartItem) => {
    setProducts(prevState => {
      let newProducts: CartItem[] = [];

      const productIndex = prevState.findIndex(item => item.id === product.id);
      if (productIndex !== -1) {
        newProducts = [...prevState];
        newProducts[productIndex].quantity = newProducts[productIndex].quantity ? ++newProducts[productIndex].quantity : 1;

        return newProducts;
      } else {
        newProducts = [...prevState, product];

        return newProducts;
      }
    });
  };

  const deleteProduct = (productId: string) => {
    setProducts(prevState => prevState.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setProducts([]);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        addProduct,
        deleteProduct,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
