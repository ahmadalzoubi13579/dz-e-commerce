import { FC } from 'react';
import { Order } from '~/src/types/app';
import { OrderCard } from '../OrderCard';

interface OrdersGridProps {
  orders: Order[];
}

const OrdersGrid: FC<OrdersGridProps> = ({ orders }) => {
  return (
    <div className='flex flex-wrap my-3'>
      {orders.map(order => (
        <div key={order.id} className='basis-full md:basis-6/12 xl:basis-4/12 p-2'>
          <OrderCard order={order} />
        </div>
      ))}
    </div>
  );
};

export { OrdersGrid };
