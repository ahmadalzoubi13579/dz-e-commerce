import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { OrderDetails } from '~/src/app/features/orders/components/OrderDetails';
import { prefetchGetOrderDetailsQuery } from '~/src/app/features/orders/services/queries';
import { PageProps } from '~/src/types/next';

// this is order details page
export default async function OrderPage(props: PageProps) {
  const { orderId } = props.params;
  const queryClient = await prefetchGetOrderDetailsQuery({
    pathParams: {
      id: orderId,
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <OrderDetails id={orderId} />
    </HydrationBoundary>
  );

  return <div>{OrderPage.name}</div>;
}
