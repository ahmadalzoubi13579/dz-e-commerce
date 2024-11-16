'use client';

import { ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '~/src/components/ui/button';
import { PATHS } from '../../constants/paths';

const CartButton = () => {
  const router = useRouter();

  const handleClick = () => router.push(PATHS.CART);

  return (
    <Button variant='link' size='icon' onClick={handleClick}>
      <ShoppingCart />
    </Button>
  );
};

export { CartButton };
