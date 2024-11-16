'use client';

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { NavList } from '../NavList';
import { Menu } from 'lucide-react';
import { useScreenSize } from '../../hooks/useScreenSize';
import { useEffect } from 'react';
import { SCREEN_BREAKPOINT } from '../../types';
import { useSideMenuContext } from '../../context/SideMenuContext';

const SideMenu = () => {
  const { isSideMenuOpen, toggleSideMenu, setSideMenu } = useSideMenuContext();

  const { screenSize } = useScreenSize();

  const toggleSheet = () => {
    toggleSideMenu();
  };

  const closeSheet = () => {
    setSideMenu(false);
  };

  useEffect(() => {
    if (screenSize >= SCREEN_BREAKPOINT.MD) {
      closeSheet();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenSize]);

  return (
    <div className='md:hidden'>
      <Sheet open={isSideMenuOpen} onOpenChange={toggleSheet}>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side='left'>
          <SheetHeader>
            <SheetTitle>DZ Store</SheetTitle>
            <SheetDescription>Welcome to DZ Store</SheetDescription>
            <NavList />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export { SideMenu };
