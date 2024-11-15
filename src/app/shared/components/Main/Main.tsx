import { FC } from 'react';
import { ContainerProps } from '~/src/types/next';

const Main: FC<ContainerProps> = ({ children }) => {
  return <main className='mt-8'>{children}</main>;
};

export { Main };
