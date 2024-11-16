import { FC } from 'react';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { ImageLoader } from '~/src/app/shared/components/ImageLoader';
import { CartItem } from '../../context/CartContext/models';
import { ControlsFooter } from './ControlsFooter';
import { useCartContext } from '../../context/CartContext';

interface CartProductProps {
  cartProduct: CartItem;
}

const CartProduct: FC<CartProductProps> = ({ cartProduct }) => {
  const { id, name, image, price, quantity } = cartProduct;

  const { incProduct, decProduct, removeProduct } = useCartContext();

  const handleMinusClick = () => {
    decProduct(id);
  };

  const handlePlusClick = () => {
    incProduct({
      id,
      name,
      image,
      price,
    });
  };

  const handleRemoveClick = () => {
    removeProduct(id);
  };

  return (
    <Card className='h-full flex flex-col text-center'>
      <CardHeader>
        <CardTitle>
          <h2 className='line-clamp-2'>{name}</h2>
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className='mt-auto'>
        <ImageLoader src={image} alt={`${name} product image`} />
      </CardContent>
      <CardFooter>
        <ControlsFooter
          priceAmount={price}
          quantity={quantity ?? 1}
          handleMinusClick={handleMinusClick}
          handlePlusClick={handlePlusClick}
          handleRemoveClick={handleRemoveClick}
        />
      </CardFooter>
    </Card>
  );
};

export { CartProduct };
