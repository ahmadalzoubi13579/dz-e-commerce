'use client';

import { DataLoader } from '~/src/app/shared/components/DataLoader';
import { useGetCategoriesQuery } from '../../services/queries';
import { CategoriesGrid } from '../CategoriesGrid';
import { EmptyState } from '~/src/app/shared/components/EmptyState';

const CategoriesList = () => {
  const { data, isFetching } = useGetCategoriesQuery();

  if (isFetching) return <DataLoader />;

  if (!data) return <EmptyState />;

  return (
    <section>
      <h1 className='text-4xl'>Available Categories</h1>
      <CategoriesGrid categories={data.data} />
    </section>
  );
};

export { CategoriesList };
