import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { prefetchGetCategoriesQuery } from '../../features/categories/services/queries';
import { CategoriesList } from '../../features/categories/components/CategoriesList';

// this is the listing page of all categories
export default async function CategoriesPage() {
  const queryClient = await prefetchGetCategoriesQuery();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CategoriesList />
    </HydrationBoundary>
  );
}
