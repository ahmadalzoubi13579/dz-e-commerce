import { FC } from 'react';
import { Product } from '~/src/types/app';
import { ProductCard } from '../ProductCard';

interface ProductsGridProps {
  products: Product[];
}

const ProductsGrid: FC<ProductsGridProps> = ({ products }) => {
  return (
    <div className='flex flex-wrap my-3'>
      {products.map(product => (
        <div key={product.id} className='basis-full sm:basis-6/12 lg:basis-4/12 xl:basis-3/12 p-1'>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export { ProductsGrid };
