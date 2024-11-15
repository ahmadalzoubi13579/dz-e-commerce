import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { ProductDetails } from '~/src/app/features/products/components/ProductDetails';
import { prefetchGetProductDetailsQuery } from '~/src/app/features/products/services/queries';
import { PageProps } from '~/src/types/next';

// this is the detail page of a product
export default async function ProductPage(props: PageProps) {
  const { productId } = props.params;
  const queryClient = await prefetchGetProductDetailsQuery({
    pathParams: {
      id: productId,
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductDetails id={productId} />
    </HydrationBoundary>
  );
}
