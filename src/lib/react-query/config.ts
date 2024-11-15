import { QueryClientConfig } from '@tanstack/react-query';

const customQueryClientConfigs: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 2 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
};

export { customQueryClientConfigs };
