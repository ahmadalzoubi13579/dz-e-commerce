import {
  FetchQueryOptions,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';

export enum HTTP_METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE ',
}

export interface ServiceConfigs {
  url: string;
  method?: HTTP_METHODS;
  headers?: object;
}

export type QueryConfigs<TResData> = Partial<UseQueryOptions<TResData>>;
export interface QueryPayload<TPathParamsData, TQueryParamsData> {
  pathParams?: TPathParamsData;
  queryParams?: TQueryParamsData;
}

export type MutationConfigs<TResData, TPayload> = Partial<
  UseMutationOptions<TResData, Error, TPayload>
>;
export interface MutationPayload<TReqData, TPathParamsData, TQueryParamsData> {
  data?: TReqData;
  pathParams?: TPathParamsData;
  queryParams?: TQueryParamsData;
}

export type PrefetchQueryConfigs<TResData> = Partial<
  FetchQueryOptions<TResData>
>;
