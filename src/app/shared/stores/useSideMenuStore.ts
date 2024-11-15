import { createGlobalStore, stateHandler, ZustandStateHandler } from '~/src/lib/zustand';

interface SideMenuData {
  isOpen: boolean;
}

interface SideMenuStore {
  sideMenu: SideMenuData;
  setSideMenu: ZustandStateHandler<SideMenuData>;
}

type SideMenuState = Pick<SideMenuStore, 'sideMenu'>;

const initialValue: SideMenuState = {
  sideMenu: {
    isOpen: false,
  },
};

const useSideMenuStore = createGlobalStore<SideMenuStore>(set => ({
  sideMenu: initialValue.sideMenu,
  setSideMenu: state => stateHandler(state, 'sideMenu', set),
}));

export { useSideMenuStore };
