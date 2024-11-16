import { FC } from 'react';
import { Header } from '../Header';
import { ContainerProps } from '~/src/types/next';
import { Main } from '../Main';
import { Footer } from '../Footer';
import { Toaster } from '~/src/components/ui/toaster';

const Umbrella: FC<ContainerProps> = ({ children }) => {
  return (
    <div>
      <div className='container mx-auto min-h-screen flex flex-col p-6 pb-0 text-center'>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </div>
      <Toaster />
    </div>
  );
};

export { Umbrella };
