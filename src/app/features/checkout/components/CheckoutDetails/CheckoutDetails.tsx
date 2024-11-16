'use client';

import { EmptyState } from '~/src/app/shared/components/EmptyState';
import { useCartContext } from '../../context/CartContext';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '~/src/components/ui/card';
import { useMemo } from 'react';
import { TAX_RATE } from '~/src/config/constants';
import { Button } from '~/src/components/ui/button';
import { useSubmitOrder } from '../../services/mutations';
import { useToast } from '~/src/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { PATHS } from '~/src/app/shared/constants/paths';
import { Loader2 } from 'lucide-react';

const CheckoutDetails = () => {
  const router = useRouter();
  const { toast } = useToast();

  const { products, clearCart } = useCartContext();

  const productsStr = JSON.stringify(products);
  const totalItems = useMemo(
    () => products.reduce((accumulator, item) => accumulator + (item.quantity as number), 0),
    [productsStr],
  );
  const totalPrice = useMemo(
    () => products.reduce((accumulator, item) => accumulator + (item.quantity as number) * item.price, 0),
    [productsStr],
  );

  const submitOrder = useSubmitOrder();

  const handleSubmit = () => {
    submitOrder.mutate(
      {
        data: {
          products: products.map(({ id, quantity }) => ({
            id,
            quantity,
          })),
        },
      },
      {
        onSuccess: () => {
          toast({
            title: 'Order submitted successfully',
          });
          clearCart();
          router.push(PATHS.ORDERS);
        },
        onError: () => {
          toast({
            title: 'Oops! Something went wrong while submitting your order. Please try again later.',
          });
        },
      },
    );
  };

  if (products.length === 0) return <EmptyState title='No Products in cart to make order!' />;

  return (
    <section className='text-left my-5'>
      <h1 className='text-center text-4xl'>Checkout</h1>

      <Card className='mt-20'>
        <CardHeader>
          <CardTitle>
            <h2 className='flex flex-col mt-10'>Total Items: {totalItems}</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col space-y-1'>
            {products.map(({ id, name, quantity, price }) => (
              <div key={id} className='flex flex-col'>
                <span>{name}:</span>
                <span>
                  {quantity} x {price.toFixed(2)}$ = {((quantity as number) * price).toFixed(2)}$
                </span>
              </div>
            ))}
          </div>

          <div className='mt-10 flex flex-col'>
            <span>Total Price: {totalPrice.toFixed(2)}$</span>
            <span>Total Price with Tax: {(totalPrice + totalPrice * TAX_RATE).toFixed(2)}$</span>
          </div>

          <div className='mt-6'>
            <h3>Complete your information:</h3>
            <div className='flex space-x-5 mt-1'>
              <div className='space-x-2'>
                <label htmlFor='address'>Address</label>
                <input id='address' className='bg-gray-400' />
              </div>
              <div className='space-x-2'>
                <label htmlFor='name'>Name</label>
                <input id='name' className='bg-gray-400' />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className='justify-center'>
          <Button disabled={submitOrder.isPending} onClick={handleSubmit}>
            {submitOrder.isPending && <Loader2 className='animate-spin' />}
            <span>Submit Order</span>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export { CheckoutDetails };
