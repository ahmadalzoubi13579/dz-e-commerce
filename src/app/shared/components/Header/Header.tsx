import { Controls } from '../Controls/Controls';
import { Logo } from '../Logo';
import { NavList } from '../NavList';

const Header = () => {
  return (
    <header className='bg-green-300 flex justify-between'>
      <Logo />
      <NavList />
      <Controls />
    </header>
  );
};

export { Header };
