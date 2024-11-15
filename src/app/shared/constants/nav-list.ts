import { NavItemModel } from '../types';
import { PATHS } from './paths';

const NAV_LIST: NavItemModel[] = [
  {
    title: 'Home',
    path: PATHS.HOME,
    icon: '',
  },
  {
    title: 'Products',
    path: PATHS.PRODUCTS,
    icon: '',
  },
  {
    title: 'Categories',
    path: PATHS.CATEGORIES,
  },
  {
    title: 'Orders',
    path: PATHS.ORDERS,
  },
];

export { NAV_LIST };
