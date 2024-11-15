'use client';

import { useGetOrdersQuery } from '../../services/queries';
import { OrdersGrid } from '../OrdersGrid';

const OrdersList = () => {
  const { data, isFetching } = useGetOrdersQuery();

  if (isFetching) return <h1>Loading...</h1>;

  if (!data) return <h1>No Data!</h1>;

  return (
    <section>
      <h1 className='text-4xl'>Orders History</h1>
      <OrdersGrid orders={data.data} />
    </section>
  );
};

export { OrdersList };
