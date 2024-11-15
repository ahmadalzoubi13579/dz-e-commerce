import { QueryKey, useQuery } from '@tanstack/react-query';

import { HTTP_METHODS, QueryConfigs, QueryPayload, ServiceConfigs } from './types';
import { customAxiosInstance } from '../axios';

function createQueryService<TResData = null, TPathParamsData = null, TQueryParamsData = null>(
  serviceConfigs: ServiceConfigs,
  defaultQueryConfigs?: QueryConfigs<TResData>,
) {
  function useQueryService(payload?: QueryPayload<TPathParamsData, TQueryParamsData>, queryConfigs?: QueryConfigs<TResData>) {
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

    const query = useQuery({
      queryKey,
      queryFn,
      ...defaultQueryConfigs,
      ...queryConfigs,
    });

    return {
      ...query,
      queryKey,
    };
  }

  return useQueryService;
}

export { createQueryService };
