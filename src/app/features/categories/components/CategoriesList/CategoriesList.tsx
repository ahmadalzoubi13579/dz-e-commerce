'use client';

import { useGetCategoriesQuery } from '../../services/queries';

const CategoriesList = () => {
  const { data, isFetching } = useGetCategoriesQuery();

  console.log(isFetching, data);

  return <div>Categories page</div>;
};

export { CategoriesList };
