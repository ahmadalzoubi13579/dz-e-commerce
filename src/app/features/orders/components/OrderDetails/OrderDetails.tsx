'use client';

import { FC } from 'react';
import { useGetOrderDetailsQuery } from '../../services/queries';

interface OrderDetailsProps {
  id: string;
}

const OrderDetails: FC<OrderDetailsProps> = ({ id }) => {
  const { data, isFetching } = useGetOrderDetailsQuery({
    pathParams: {
      id,
    },
  });

  return <div>order details page</div>;
};

export { OrderDetails };
