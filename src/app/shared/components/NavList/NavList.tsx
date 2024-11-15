import { NAV_LIST } from '../../constants/nav-list';
import { NavItem } from './NavItem';

const NavList = () => {
  return (
    <nav className='flex flex-col md:flex-row'>
      {NAV_LIST.map(item => (
        <NavItem key={item.path} item={item} />
      ))}
    </nav>
  );
};

export { NavList };
