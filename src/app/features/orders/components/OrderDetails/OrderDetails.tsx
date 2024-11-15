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

  return (
    <section>
      <div>order details page</div>;
    </section>
  );
};

export { OrderDetails };
