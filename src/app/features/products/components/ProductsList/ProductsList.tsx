'use client';

import { useGetProductsQuery } from '../../services/queries';

const ProductsList = () => {
  const { data, isFetching } = useGetProductsQuery();

  return <div>products page</div>;
};

export { ProductsList };
