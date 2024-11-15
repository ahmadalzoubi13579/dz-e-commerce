import Link from 'next/link';
import { Button } from '~/src/components/ui/button';

const Logo = () => {
  return (
    <Button asChild variant='link' className='text-2xl'>
      <Link href='/'>DZ Store</Link>
    </Button>
  );
};

export { Logo };
