import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { prefetchGetProductsQuery } from '../../features/products/services/queries';
import { ProductsList } from '../../features/products/components/ProductsList';
import { Metadata } from 'next';
import { PATHS } from '../../shared/constants/paths';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Welcome to products page',
  alternates: {
    canonical: PATHS.PRODUCTS,
  },
};

// this is the listing page of all products
export default async function ProductsPage() {
  const queryClient = await prefetchGetProductsQuery();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductsList />
    </HydrationBoundary>
  );
}
