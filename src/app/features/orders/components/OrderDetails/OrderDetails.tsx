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

  console.log(data, isFetching);

  return <div>order details page</div>;
};

export { OrderDetails };
