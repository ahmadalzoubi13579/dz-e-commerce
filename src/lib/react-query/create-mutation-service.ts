import { useMutation } from '@tanstack/react-query';

import { HTTP_METHODS, MutationConfigs, MutationPayload, ServiceConfigs } from './types';
import { customAxiosInstance } from '../axios';

function createMutationService<TReqData = null, TResData = null, TPathParamsData = null, TQueryParamsData = null>(
  serviceConfigs: ServiceConfigs,
  defaultMutationConfigs?: MutationConfigs<TResData, MutationPayload<TReqData, TPathParamsData, TQueryParamsData>>,
) {
  function useMutationService(
    mutationConfigs?: MutationConfigs<TResData, MutationPayload<TReqData, TPathParamsData, TQueryParamsData>>,
  ) {
    async function mutationFn(payload?: MutationPayload<TReqData, TPathParamsData, TQueryParamsData>) {
      const url = serviceConfigs.url;
      const serviceHttpMethod = serviceConfigs.method ?? HTTP_METHODS.POST;
      const serviceHeaders = serviceConfigs.headers;
      const pathParams = payload?.pathParams;
      const queryParams = payload?.queryParams;
      const sendData = payload?.data;

      const pathParamsString = pathParams ? `/${Object.values(pathParams).join('/')}` : '';
      const serviceUrl = `${url}${pathParamsString}`;

      const res = await customAxiosInstance.request({
        method: serviceHttpMethod,
        url: serviceUrl,
        params: queryParams,
        data: sendData,
        headers: serviceHeaders,
      });

      return res.data;
    }

    const mutation = useMutation({
      mutationFn,
      ...defaultMutationConfigs,
      ...mutationConfigs,
    });

    return {
      ...mutation,
    };
  }

  return useMutationService;
}

export { createMutationService };
