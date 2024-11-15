'use client';

import { useGetOrdersQuery } from '../../services/queries';

const OrdersList = () => {
  const { data, isFetching } = useGetOrdersQuery();

  console.log(data, isFetching);

  return <div>Orders page</div>;
};

export { OrdersList };
