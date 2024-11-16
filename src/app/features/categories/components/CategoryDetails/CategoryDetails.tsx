'use client';

import { FC } from 'react';
import { useGetCategoryDetailsQuery } from '../../services/queries';
import { useGetProductsQuery } from '../../../products/services/queries';
import { ImageLoader } from '~/src/app/shared/components/ImageLoader';
import { ProductsGrid } from '../../../products/components/ProductsGrid';
import { DataLoader } from '~/src/app/shared/components/DataLoader';
import { EmptyState } from '~/src/app/shared/components/EmptyState';
import { isString } from '~/src/app/shared/helpers/is-string';
import { useErrorToast } from '~/src/app/shared/hooks/useErrorToast';

interface CategoryDetailsProps {
  id: string;
  slug: string;
}

const CategoryDetails: FC<CategoryDetailsProps> = ({ id, slug }) => {
  const {
    data: categoryData,
    isFetching: isFetchingCategory,
    isError: isErrorCategory,
  } = useGetCategoryDetailsQuery({
    pathParams: {
      id,
    },
  });

  const {
    data: productsData,
    isFetching: isFetchingProducts,
    isError: isErrorProducts,
  } = useGetProductsQuery({
    queryParams: {
      category: slug,
    },
  });

  useErrorToast(isErrorCategory);
  useErrorToast(isErrorProducts, "Oops! Something went wrong while fetching category's products. Please try again later.");

  if (isFetchingCategory) return <DataLoader />;

  if (!categoryData || isString(categoryData)) return <EmptyState />;

  const { name, description, image } = categoryData.data;

  return (
    <section className='text-left space-y-5 my-5'>
      <h1 className='text-center text-4xl'>{name}</h1>

      <div>
        <h2 className='text-2xl'>Description:</h2>
        <p>{description}</p>
      </div>

      <ImageLoader src={image} alt={`${name} category image`} wrapperClassNames='h-96' />

      {isFetchingProducts ? (
        <DataLoader />
      ) : !productsData || isString(productsData) ? (
        <EmptyState title='No Products found in This Category!' />
      ) : (
        <ProductsGrid products={productsData.data} />
      )}
    </section>
  );
};

export { CategoryDetails };
