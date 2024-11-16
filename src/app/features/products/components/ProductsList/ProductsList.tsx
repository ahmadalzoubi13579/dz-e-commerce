'use client';

import { DataLoader } from '~/src/app/shared/components/DataLoader';
import { useGetProductsQuery } from '../../services/queries';
import { ProductsGrid } from '../ProductsGrid';
import { EmptyState } from '~/src/app/shared/components/EmptyState';
import { isString } from '~/src/app/shared/helpers/is-string';
import { useErrorToast } from '~/src/app/shared/hooks/useErrorToast';

const ProductsList = () => {
  const { data, isFetching, isError } = useGetProductsQuery();

  useErrorToast(isError);

  if (isFetching) return <DataLoader />;
  if (!data || isString(data)) return <EmptyState />;

  return (
    <section>
      <h1 className='text-4xl'>Our Products</h1>
      <ProductsGrid products={data.data} />
    </section>
  );
};

export { ProductsList };
