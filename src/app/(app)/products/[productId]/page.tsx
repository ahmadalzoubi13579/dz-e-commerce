import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { ProductDetails } from '~/src/app/features/products/components/ProductDetails';
import { productsUrl } from '~/src/app/features/products/services/configs';
import { GetProductDetailsResponse, GetProductsResponse } from '~/src/app/features/products/services/models';
import { prefetchGetProductDetailsQuery } from '~/src/app/features/products/services/queries';
import { PATHS } from '~/src/app/shared/constants/paths';
import { BASE_API_URL, GOOGLE_SERP_LENGTH } from '~/src/config/constants';
import { Metadata, PageProps } from '~/src/types/next';

interface ParamModel {
  productId: string;
}

export async function generateStaticParams(): Promise<ParamModel[]> {
  const productsListUrl = `${BASE_API_URL}${productsUrl}`;

  const res = await fetch(productsListUrl);
  const products: GetProductsResponse = await res.json();

  if (products?.data) {
    // now I can't fetch data from next server because I can't run build and dev together
    // so I made the list empty, but in case we fetch from other server we put for example (products.data.slice(0, 20))
    return products.data.slice(0, 0).map(productItem => ({
      productId: productItem.id,
    }));
  } else {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata | undefined> {
  const productUrl = `${BASE_API_URL}${productsUrl}/${params.productId}`;

  const res = await fetch(productUrl);
  const product: GetProductDetailsResponse = await res.json();
  const productData = product?.data;

  if (productData) {
    return {
      title: productData.name,
      description: productData.description.slice(0, GOOGLE_SERP_LENGTH),
      authors: {
        name: 'DZ Store',
      },
      alternates: {
        canonical: `${PATHS.PRODUCTS}/${params.productId}`,
      },
    };
  } else {
    return undefined;
  }
}

// generate for other dynamic routes ex. categories/:id, like previous one (using generateStaticParams and generateMetaData) etc.

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
