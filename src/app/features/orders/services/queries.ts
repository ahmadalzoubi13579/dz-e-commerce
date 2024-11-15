import { createPrefetchQueryService, createQueryService } from '~/src/lib/react-query';
import { ordersUrl } from './configs';
import { GetOrderDetailsPathParams, GetOrderDetailsResponse, GetOrdersResponse } from './models';

const prefetchGetOrdersQuery = createPrefetchQueryService<GetOrdersResponse>({
  url: ordersUrl,
});

const useGetOrdersQuery = createQueryService<GetOrdersResponse>({
  url: ordersUrl,
});

const prefetchGetOrderDetailsQuery = createPrefetchQueryService<GetOrderDetailsResponse, GetOrderDetailsPathParams>({
  url: ordersUrl,
});

const useGetOrderDetailsQuery = createQueryService<GetOrderDetailsResponse, GetOrderDetailsPathParams>({
  url: ordersUrl,
});

export { useGetOrdersQuery, prefetchGetOrdersQuery, useGetOrderDetailsQuery, prefetchGetOrderDetailsQuery };
