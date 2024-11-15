'use client';

import { FC } from 'react';
import { useGetProductDetailsQuery } from '../../services/queries';

interface ProductDetailsProps {
  id: string;
}

const ProductDetails: FC<ProductDetailsProps> = ({ id }) => {
  const { data, isFetching } = useGetProductDetailsQuery({
    pathParams: {
      id,
    },
  });

  return <div>product details page</div>;
};

export { ProductDetails };
