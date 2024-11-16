import { Controls } from '../Controls/Controls';
import { Logo } from '../Logo';
import { NavBar } from '../NavBar';
import { SideMenu } from '../SideMenu';

const Header = () => {
  return (
    <header className='bg-gray-300 fixed z-50 top-0 left-0 w-full px-3 flex justify-between items-center'>
      <SideMenu />
      <Logo />
      <NavBar />
      <Controls />
    </header>
  );
};

export { Header };
