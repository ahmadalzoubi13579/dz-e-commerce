'use client';

import { useGetOrdersQuery } from '../../services/queries';

const OrdersList = () => {
  const { data, isFetching } = useGetOrdersQuery();

  return <div>Orders page</div>;
};

export { OrdersList };
