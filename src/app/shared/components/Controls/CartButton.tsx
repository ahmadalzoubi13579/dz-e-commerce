'use client';

import { ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '~/src/components/ui/button';
import { PATHS } from '../../constants/paths';
import { Indicator } from './Indicator';
import { useCartContext } from '~/src/app/features/checkout/context/CartContext';

const CartButton = () => {
  const router = useRouter();

  const { products } = useCartContext();

  const handleClick = () => router.push(PATHS.CART);

  return (
    <div className='relative'>
      {products.length !== 0 && <Indicator />}
      <Button variant='link' size='icon' onClick={handleClick}>
        <ShoppingCart />
      </Button>
    </div>
  );
};

export { CartButton };
