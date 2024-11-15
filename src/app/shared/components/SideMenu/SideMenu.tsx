'use client';

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { NavList } from '../NavList';
import { Menu } from 'lucide-react';
import { useScreenSize } from '../../hooks/useScreenSize';
import { useEffect } from 'react';
import { SCREEN_BREAKPOINT } from '../../types';
import { useSideMenuStore } from '../../stores/useSideMenuStore';

const SideMenu = () => {
  const { sideMenu, setSideMenu } = useSideMenuStore();
  const { screenSize } = useScreenSize();

  const toggleSideMenu = () =>
    setSideMenu(prevState => ({
      isOpen: !prevState.isOpen,
    }));

  useEffect(() => {
    if (screenSize >= SCREEN_BREAKPOINT.MD) {
      setSideMenu({
        isOpen: false,
      });
    }
  }, [screenSize]);

  return (
    <div className='md:hidden'>
      <Sheet open={sideMenu.isOpen} onOpenChange={toggleSideMenu}>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side='left'>
          <SheetHeader>
            <SheetTitle>Welcome to DZ Store</SheetTitle>
            <SheetDescription>
              <NavList />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export { SideMenu };
