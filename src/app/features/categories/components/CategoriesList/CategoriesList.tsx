'use client';

import { useGetCategoriesQuery } from '../../services/queries';
import { CategoriesGrid } from '../CategoriesGrid';

const CategoriesList = () => {
  const { data, isFetching } = useGetCategoriesQuery();

  if (isFetching) return <h1>Loading...</h1>;

  if (!data) return <h1>No Data!</h1>;

  return (
    <section>
      <h1 className='text-4xl'>Available Categories</h1>
      <CategoriesGrid categories={data.data} />
    </section>
  );
};

export { CategoriesList };
