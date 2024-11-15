'use client';

import { FC } from 'react';
import { useGetCategoryDetailsQuery } from '../../services/queries';
import { useGetProductsQuery } from '../../../products/services/queries';
import { ImageLoader } from '~/src/app/shared/components/ImageLoader';
import { ProductsGrid } from '../../../products/components/ProductsGrid';

interface CategoryDetailsProps {
  id: string;
  slug: string;
}

const CategoryDetails: FC<CategoryDetailsProps> = ({ id, slug }) => {
  const { data: categoryData, isFetching: isFetchingCategory } = useGetCategoryDetailsQuery({
    pathParams: {
      id,
    },
  });

  const { data: productsData, isFetching: isFetchingProducts } = useGetProductsQuery({
    queryParams: {
      category: slug,
    },
  });

  if (isFetchingCategory) return <h1>Loading...</h1>;

  if (!categoryData) return <h1>No Data!</h1>;

  const { name, description, image } = categoryData.data;

  return (
    <section className='text-left space-y-5'>
      <h1 className='text-center text-4xl'>{name}</h1>

      <div>
        <h2 className='text-2xl'>Description:</h2>
        <p>{description}</p>
      </div>

      <ImageLoader src={image} alt={`${name} category image`} wrapperClassNames='h-96' />

      {isFetchingProducts ? (
        <h2>Loading...</h2>
      ) : !productsData ? (
        <h2>No Products in This Category!</h2>
      ) : (
        <ProductsGrid products={productsData.data} />
      )}
    </section>
  );
};

export { CategoryDetails };
