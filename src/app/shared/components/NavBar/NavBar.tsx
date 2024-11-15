import { NavList } from '../NavList';

const NavBar = () => {
  return (
    <div className='hidden md:flex items-center'>
      <NavList />
    </div>
  );
};

export { NavBar };
