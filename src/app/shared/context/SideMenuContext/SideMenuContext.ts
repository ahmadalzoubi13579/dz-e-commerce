'use client';

import { createContext } from 'react';

import { SideMenuModel } from './models';

const sideMenu: SideMenuModel = {
  isOpen: false,
};

const SideMenuContext = createContext({
  isSideMenuOpen: sideMenu.isOpen,
  toggleSideMenu: () => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setSideMenu: (isOpen: boolean) => {},
});

export { SideMenuContext };
