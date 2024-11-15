'use client';

import { useGetProductsQuery } from '../../services/queries';
import { ProductsGrid } from '../ProductsGrid';

const ProductsList = () => {
  const { data, isFetching } = useGetProductsQuery();

  if (isFetching) return <h1>Loading...</h1>;

  if (!data) return <h1>No Data!</h1>;

  return (
    <section>
      <h1 className='text-4xl'>Our Products</h1>
      <ProductsGrid products={data.data} />
    </section>
  );
};

export { ProductsList };
