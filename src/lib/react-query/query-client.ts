import { QueryClient } from '@tanstack/react-query';

import { customQueryClientConfigs } from './config';

const createCustomQueryClient = () => new QueryClient(customQueryClientConfigs);

export { createCustomQueryClient };
