'use client';

import { DataLoader } from '~/src/app/shared/components/DataLoader';
import { useGetOrdersQuery } from '../../services/queries';
import { OrdersGrid } from '../OrdersGrid';
import { EmptyState } from '~/src/app/shared/components/EmptyState';
import { isString } from '~/src/app/shared/helpers/is-string';
import { useErrorToast } from '~/src/app/shared/hooks/useErrorToast';

const OrdersList = () => {
  const { data, isFetching, isError } = useGetOrdersQuery();

  useErrorToast(isError);

  if (isFetching) return <DataLoader />;

  if (!data || isString(data)) return <EmptyState />;

  return (
    <section>
      <h1 className='text-4xl'>Orders History</h1>
      <OrdersGrid orders={data.data} />
    </section>
  );
};

export { OrdersList };
