'use client';

import { DataLoader } from '~/src/app/shared/components/DataLoader';
import { useGetProductsQuery } from '../../services/queries';
import { ProductsGrid } from '../ProductsGrid';
import { EmptyState } from '~/src/app/shared/components/EmptyState';

const ProductsList = () => {
  const { data, isFetching } = useGetProductsQuery();

  if (isFetching) return <DataLoader />;

  if (!data) return <EmptyState />;

  return (
    <section>
      <h1 className='text-4xl'>Our Products</h1>
      <ProductsGrid products={data.data} />
    </section>
  );
};

export { ProductsList };
