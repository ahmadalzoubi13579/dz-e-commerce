import { productsUrl } from './configs';
import { createPrefetchQueryService, createQueryService } from '~/src/lib/react-query';
import { GetProductDetailsPathParams, GetProductDetailsResponse, GetProductsQueryParams, GetProductsResponse } from './models';

const prefetchGetProductsQuery = createPrefetchQueryService<GetProductsResponse, null, GetProductsQueryParams>({
  url: productsUrl,
});

const useGetProductsQuery = createQueryService<GetProductsResponse, null, GetProductsQueryParams>({
  url: productsUrl,
});

const prefetchGetProductDetailsQuery = createPrefetchQueryService<GetProductDetailsResponse, GetProductDetailsPathParams>({
  url: productsUrl,
});

const useGetProductDetailsQuery = createQueryService<GetProductDetailsResponse, GetProductDetailsPathParams>({
  url: productsUrl,
});

export { useGetProductsQuery, prefetchGetProductsQuery, useGetProductDetailsQuery, prefetchGetProductDetailsQuery };
