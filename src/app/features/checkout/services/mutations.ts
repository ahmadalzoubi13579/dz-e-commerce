import { createMutationService } from '~/src/lib/react-query';
import { checkoutUrl } from './configs';
import { SubmitOrderRequest, SubmitOrderResponse } from './models';

const useSubmitOrder = createMutationService<SubmitOrderRequest, SubmitOrderResponse>({
  url: checkoutUrl,
});

export { useSubmitOrder };
