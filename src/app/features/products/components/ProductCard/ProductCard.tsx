import { FC } from 'react';
import { Product } from '~/src/types/app';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '~/src/components/ui/button';
import { ArrowRight, CirclePlus, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { PATHS } from '~/src/app/shared/constants/paths';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ImageLoader } from '~/src/app/shared/components/ImageLoader';

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { id, name, description, images, price } = product;

  return (
    <Card className='h-full flex flex-col'>
      <CardHeader>
        <CardTitle>
          <h2 className='line-clamp-2'>{name}</h2>
        </CardTitle>
        <CardDescription>
          <p className='line-clamp-2'>{description}</p>
        </CardDescription>
      </CardHeader>
      <CardContent className='mt-auto'>
        <ImageLoader src={images[0]} alt={`${name} image`} />
      </CardContent>
      <CardFooter className='justify-between'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className='flex items-center space-x-1 bg-gray-950 hover:bg-gray-700 text-white px-2 py-1 rounded-md'>
              <CirclePlus />
              <span>{price.amount.toFixed(2)} $</span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to Cart</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Button asChild variant='link'>
          <Link href={`${PATHS.PRODUCTS}/${id}`}>
            <span>More</span>
            <ArrowRight />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { ProductCard };
