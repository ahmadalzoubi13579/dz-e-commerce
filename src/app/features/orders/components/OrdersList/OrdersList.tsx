'use client';

import { DataLoader } from '~/src/app/shared/components/DataLoader';
import { useGetOrdersQuery } from '../../services/queries';
import { OrdersGrid } from '../OrdersGrid';
import { EmptyState } from '~/src/app/shared/components/EmptyState';

const OrdersList = () => {
  const { data, isFetching } = useGetOrdersQuery();

  if (isFetching) return <DataLoader />;

  if (!data) return <EmptyState />;

  return (
    <section>
      <h1 className='text-4xl'>Orders History</h1>
      <OrdersGrid orders={data.data} />
    </section>
  );
};

export { OrdersList };
