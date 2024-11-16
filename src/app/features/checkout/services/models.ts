import { Checkout, Order } from '~/src/types/app';

export interface SubmitOrderRequest extends Partial<Checkout> {}

export interface SubmitOrderResponse {
  data: Order;
}
