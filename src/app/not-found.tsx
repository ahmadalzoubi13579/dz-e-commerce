import { Metadata } from 'next';
import { EmptyState } from './shared/components/EmptyState';

export const metadata: Metadata = {
  title: {
    absolute: '404 Not Found',
  },
  description: "This page doesn't exist",
};

export default function AppNotFound() {
  return <EmptyState title='404 Page Not Found!' />;
}
