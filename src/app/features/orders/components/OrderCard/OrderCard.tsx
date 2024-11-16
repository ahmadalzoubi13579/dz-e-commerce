import { FC } from 'react';
import { Order } from '~/src/types/app';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface OrderCardProps {
  order: Order;
}

const OrderCard: FC<OrderCardProps> = ({ order }) => {
  const { id, cart, timestamp } = order;
  const orderDate = new Date(timestamp as Date).toDateString();

  return (
    <Card className='h-full flex flex-col'>
      <CardHeader>
        <CardTitle className='flex flex-col sm:flex-row space-y-1 sm:space-y-0 justify-between items-center'>
          <span className='text-sm'>{orderDate}</span>
        </CardTitle>
        <CardDescription className='flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-1 items-center'>
          <span>Id: </span>
          <span>{id}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className='mt-auto flex flex-col items-start'>
        {cart.items.map(item => (
          <span key={item.id}>
            {item.quantity} x {item.price.amount.toFixed(2)}$
          </span>
        ))}
        <span className='mt-1'>Tax: {(cart.tax * cart.subtotal.amount).toFixed(2)}$</span>
      </CardContent>
      <CardFooter className='flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-1'>
        <span>Total Price with Tax:</span>
        <span>{cart.total.amount.toFixed(2)}$</span>
      </CardFooter>
    </Card>
  );
};

export { OrderCard };
