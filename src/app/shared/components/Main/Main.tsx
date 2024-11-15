import { FC } from 'react';
import { ContainerProps } from '~/src/types/next';

const Main: FC<ContainerProps> = ({ children }) => {
  return <main className='bg-blue-300 mt-5'>{children}</main>;
};

export { Main };
