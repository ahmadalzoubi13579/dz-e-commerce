import { Product } from '~/src/types/app';

export interface GetProductsResponse {
  data: Product[];
}

export interface GetProductDetailsResponse {
  data: Product;
}

export interface GetProductDetailsPathParams {
  id: string;
}