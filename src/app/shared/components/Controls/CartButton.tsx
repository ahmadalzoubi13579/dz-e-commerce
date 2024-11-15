import { ShoppingCart } from 'lucide-react';
import { Button } from '~/src/components/ui/button';

const CartButton = () => {
  return (
    <Button variant='link' size='icon'>
      <ShoppingCart />
    </Button>
  );
};

export { CartButton };
