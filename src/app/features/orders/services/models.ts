import { Order } from '~/src/types/app';

export interface GetOrdersResponse {
  data: Order[];
}

export interface GetOrderDetailsResponse {
  data: Order;
}

export interface GetOrderDetailsPathParams {
  id: string;
}
