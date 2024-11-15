'use client';

import { FC } from 'react';
import { useGetCategoryDetailsQuery } from '../../services/queries';

interface CategoryDetailsProps {
  id: string;
}

const CategoryDetails: FC<CategoryDetailsProps> = ({ id }) => {
  const { data, isFetching } = useGetCategoryDetailsQuery({
    pathParams: {
      id,
    },
  });

  console.log(isFetching, data);

  return <div>category details page</div>;
};

export { CategoryDetails };
