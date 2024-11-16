'use client';

import { FC, useState } from 'react';

import { ContainerProps } from '~/src/types/next';
import { SideMenuContext } from './SideMenuContext';

const SideMenProvider: FC<ContainerProps> = ({ children }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(prevState => !prevState);
  };

  const setSideMenu = (isOpen: boolean) => {
    setIsSideMenuOpen(isOpen);
  };

  return (
    <SideMenuContext.Provider
      value={{
        isSideMenuOpen,
        toggleSideMenu,
        setSideMenu,
      }}
    >
      {children}
    </SideMenuContext.Provider>
  );
};

export { SideMenProvider };
