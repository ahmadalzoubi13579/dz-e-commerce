import { useContext } from 'react';

import { SideMenuContext } from './SideMenuContext';

const useSideMenuContext = () => {
  const sideMenu = useContext(SideMenuContext);
  return sideMenu;
};

export { useSideMenuContext };
