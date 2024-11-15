import { FC } from 'react';
import { NavItemModel } from '../../types';
import { Button } from '~/src/components/ui/button';
import Link from 'next/link';

interface NavItemProps {
  item: NavItemModel;
}

const NavItem: FC<NavItemProps> = ({ item }) => {
  return (
    <Button asChild variant='link'>
      <Link href={item.path}>{item.title}</Link>
    </Button>
  );
};

export { NavItem };
