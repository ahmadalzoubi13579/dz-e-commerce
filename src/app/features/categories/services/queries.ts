import { categoriesUrl } from './configs';
import { createPrefetchQueryService, createQueryService } from '~/src/lib/react-query';
import { GetCategoriesResponse, GetCategoryDetailsPathParams, GetCategoryDetailsResponse } from './models';

const prefetchGetCategoriesQuery = createPrefetchQueryService<GetCategoriesResponse>({
  url: categoriesUrl,
});

const useGetCategoriesQuery = createQueryService<GetCategoriesResponse>({
  url: categoriesUrl,
});

const prefetchGetCategoryDetailsQuery = createPrefetchQueryService<GetCategoryDetailsResponse, GetCategoryDetailsPathParams>({
  url: categoriesUrl,
});

const useGetCategoryDetailsQuery = createQueryService<GetCategoryDetailsResponse, GetCategoryDetailsPathParams>({
  url: categoriesUrl,
});

export { prefetchGetCategoriesQuery, useGetCategoriesQuery, prefetchGetCategoryDetailsQuery, useGetCategoryDetailsQuery };
