import { Controls } from '../Controls/Controls';
import { Logo } from '../Logo';
import { NavBar } from '../NavBar';
import { SideMenu } from '../SideMenu';

const Header = () => {
  return (
    <header className='bg-green-300 flex justify-between items-center'>
      <SideMenu />
      <Logo />
      <NavBar />
      <Controls />
    </header>
  );
};

export { Header };
