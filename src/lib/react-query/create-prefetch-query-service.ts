import { QueryClient, QueryKey } from '@tanstack/react-query';

import { HTTP_METHODS, PrefetchQueryConfigs, QueryPayload, ServiceConfigs } from './types';
import { customAxiosInstance } from '../axios';

function createPrefetchQueryService<TResData = null, TPathParamsData = null, TQueryParamsData = null>(
  serviceConfigs: ServiceConfigs,
  defaultPrefetchQueryConfigs?: PrefetchQueryConfigs<TResData>,
) {
  async function prefetchQueryService(
    payload?: QueryPayload<TPathParamsData, TQueryParamsData>,
    prefetchQueryConfigs?: PrefetchQueryConfigs<TResData>,
  ) {
    const url = serviceConfigs.url;
    const serviceHttpMethod = serviceConfigs.method ?? HTTP_METHODS.GET;
    const serviceHeaders = serviceConfigs.headers;
    const pathParams = payload?.pathParams;
    const queryParams = payload?.queryParams;

    const pathParamsString = pathParams ? `/${Object.values(pathParams).join('/')}` : '';
    const serviceUrl = `${url}${pathParamsString}`;

    const queryKey: QueryKey = [url, pathParams, queryParams];

    async function queryFn() {
      const res = await customAxiosInstance.request({
        method: serviceHttpMethod,
        url: serviceUrl,
        params: queryParams,
        headers: serviceHeaders,
      });

      return res.data;
    }

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
      queryKey,
      queryFn,
      ...defaultPrefetchQueryConfigs,
      ...prefetchQueryConfigs,
    });

    return queryClient;
  }

  return prefetchQueryService;
}

export { createPrefetchQueryService };
