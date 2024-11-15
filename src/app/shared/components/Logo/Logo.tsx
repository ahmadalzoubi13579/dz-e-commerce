import Link from 'next/link';
import { Button } from '~/src/components/ui/button';

const Logo = () => {
  return (
    <Button asChild variant='link' className='text-2xl hover:no-underline'>
      <Link href='/'>DZ Store</Link>
    </Button>
  );
};

export { Logo };
