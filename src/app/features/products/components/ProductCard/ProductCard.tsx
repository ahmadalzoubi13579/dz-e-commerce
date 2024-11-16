import { FC } from 'react';
import { Product } from '~/src/types/app';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { ImageLoader } from '~/src/app/shared/components/ImageLoader';
import { InfoFooter } from './InfoFooter';
import { useCartContext } from '../../../checkout/context/CartContext';
import { useToast } from '~/src/hooks/use-toast';
import { ToastAction } from '~/src/components/ui/toast';
import { useRouter } from 'next/navigation';
import { PATHS } from '~/src/app/shared/constants/paths';

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { id, name, description, images, price } = product;

  const router = useRouter();

  const { incProduct } = useCartContext();
  const { toast } = useToast();

  const handleAddClick = () => {
    toast({
      title: `${name} added to cart`,
      action: (
        <ToastAction altText='Go To Cart' onClick={() => router.push(PATHS.CART)}>
          Go To Cart
        </ToastAction>
      ),
    });
    incProduct({
      id,
      name,
      image: images[0],
      price: price.amount,
    });
  };

  return (
    <Card className='h-full flex flex-col text-center'>
      <CardHeader>
        <CardTitle>
          <h2 className='line-clamp-2'>{name}</h2>
        </CardTitle>
        <CardDescription>
          <p className='line-clamp-2'>{description}</p>
        </CardDescription>
      </CardHeader>
      <CardContent className='mt-auto'>
        <ImageLoader src={images[0]} alt={`${name} product image`} />
      </CardContent>
      <CardFooter>
        <InfoFooter id={id} priceAmount={price.amount} handleAddClick={handleAddClick} />
      </CardFooter>
    </Card>
  );
};

export { ProductCard };
