import { FC } from 'react';
import { Header } from '../Header';
import { ContainerProps } from '~/src/types/next';
import { Main } from '../Main';
import { Footer } from '../Footer';

const Umbrella: FC<ContainerProps> = ({ children }) => {
  return (
    <div className='bg-gray-100'>
      <div className='container mx-auto min-h-screen flex flex-col p-6 text-center'>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </div>
    </div>
  );
};

export { Umbrella };
