'use client';

import { DataLoader } from '~/src/app/shared/components/DataLoader';
import { useGetCategoriesQuery } from '../../services/queries';
import { CategoriesGrid } from '../CategoriesGrid';
import { EmptyState } from '~/src/app/shared/components/EmptyState';
import { isString } from '~/src/app/shared/helpers/is-string';
import { useErrorToast } from '~/src/app/shared/hooks/useErrorToast';

const CategoriesList = () => {
  const { data, isFetching, isError } = useGetCategoriesQuery();

  useErrorToast(isError);

  if (isFetching) return <DataLoader />;
  if (!data || isString(data)) return <EmptyState />;

  return (
    <section>
      <h1 className='text-4xl'>Available Categories</h1>
      <CategoriesGrid categories={data.data} />
    </section>
  );
};

export { CategoriesList };
