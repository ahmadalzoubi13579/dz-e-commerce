// this is the detail page of a category

import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { CategoryDetails } from '~/src/app/features/categories/components/CategoryDetails';
import { prefetchGetCategoryDetailsQuery } from '~/src/app/features/categories/services/queries';
import { PageProps } from '~/src/types/next';

// it should list all products of that category
export default async function CategoryPage(props: PageProps) {
  const { categoryId } = props.params;
  const queryClient = await prefetchGetCategoryDetailsQuery({
    pathParams: {
      id: categoryId,
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CategoryDetails id={categoryId} />
    </HydrationBoundary>
  );
}
