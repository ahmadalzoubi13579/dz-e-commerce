'use client';

import { EmptyState } from '~/src/app/shared/components/EmptyState';
import { useCartContext } from '../../context/CartContext';
import { CartProduct } from './CartProduct';
import { Button } from '~/src/components/ui/button';
import { useRouter } from 'next/navigation';
import { PATHS } from '~/src/app/shared/constants/paths';

const CartDetails = () => {
  const router = useRouter();

  const { products } = useCartContext();

  if (products.length === 0) return <EmptyState title='No Products in cart!' />;

  return (
    <section className='text-left my-5'>
      <h1 className='text-center text-4xl'>Shopping Cart</h1>

      <div className='flex flex-wrap mt-10'>
        {products.map(product => (
          <div key={product.id} className='basis-full sm:basis-6/12 lg:basis-4/12 xl:basis-3/12 p-1'>
            <CartProduct cartProduct={product} />
          </div>
        ))}
      </div>

      <div className='flex justify-center mt-20'>
        <Button onClick={() => router.push(PATHS.CHECKOUT)}>Go To Checkout</Button>
      </div>
    </section>
  );
};

export { CartDetails };
