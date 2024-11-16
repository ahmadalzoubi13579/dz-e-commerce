'use client';

import { FC } from 'react';
import { NavItemModel } from '../../types';
import { Button } from '~/src/components/ui/button';
import Link from 'next/link';
import { useSideMenuContext } from '../../context/SideMenuContext';

interface NavItemProps {
  item: NavItemModel;
}

const NavItem: FC<NavItemProps> = ({ item }) => {
  const { setSideMenu } = useSideMenuContext();

  const closeSideMenu = () => {
    setSideMenu(false);
  };

  return (
    <Button asChild variant='link' className='sm:justify-start' onClick={closeSideMenu}>
      <Link href={item.path}>{item.title}</Link>
    </Button>
  );
};

export { NavItem };
