import { Metadata } from 'next';
import { PATHS } from './shared/constants/paths';

export const metadata: Metadata = {
  title: 'Home | DZ Store',
  description: 'Welcome to DZ Store',
  alternates: {
    canonical: PATHS.HOME,
  },
};

export default function Home() {
  return <div>Welcome to Home Page</div>;
}
