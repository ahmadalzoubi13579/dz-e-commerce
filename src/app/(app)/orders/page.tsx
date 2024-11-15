import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { prefetchGetOrdersQuery } from '../../features/orders/services/queries';
import { OrdersList } from '../../features/orders/components/OrdersList';

// this is the listing page of all orders
export default async function OrdersPage() {
  const queryClient = await prefetchGetOrdersQuery();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <OrdersList />
    </HydrationBoundary>
  );
}
