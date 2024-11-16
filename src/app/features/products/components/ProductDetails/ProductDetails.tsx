'use client';

import { FC } from 'react';
import { useGetProductDetailsQuery } from '../../services/queries';
import { Badge } from '~/src/components/ui/badge';
import { AlbumGrid } from '~/src/app/shared/components/AlbumGrid';
import { Button } from '~/src/components/ui/button';
import { ShoppingBasket } from 'lucide-react';
import { DataLoader } from '~/src/app/shared/components/DataLoader';
import { EmptyState } from '~/src/app/shared/components/EmptyState';
import { isString } from '~/src/app/shared/helpers/is-string';
import { useErrorToast } from '~/src/app/shared/hooks/useErrorToast';

interface ProductDetailsProps {
  id: string;
}

const ProductDetails: FC<ProductDetailsProps> = ({ id }) => {
  const { data, isFetching, isError } = useGetProductDetailsQuery({
    pathParams: {
      id,
    },
  });

  useErrorToast(isError);

  if (isFetching) return <DataLoader />;
  if (!data || isString(data)) return <EmptyState />;
  const { name, description, categories, images, price } = data.data;

  return (
    <section className='text-left space-y-5 my-5'>
      <h1 className='text-center text-4xl'>{name}</h1>

      <div>
        <h2 className='text-2xl'>Description:</h2>
        <p>{description}</p>
      </div>

      <div>
        <h2 className='text-2xl'>Categories:</h2>
        <div className='flex space-x-1 flex-wrap'>
          {categories.map((category, index) => (
            <Badge key={index}>{category}</Badge>
          ))}
        </div>
      </div>

      <AlbumGrid images={images} />

      <div className='flex flex-col items-center'>
        <div className='flex items-center space-x-2'>
          <h3 className='text-lg'>Price: </h3>
          <span>{price.amount.toFixed(2)}$</span>
        </div>
        <Button>
          <ShoppingBasket />
          <span>Add to Cart</span>
        </Button>
      </div>
    </section>
  );
};

export { ProductDetails };
