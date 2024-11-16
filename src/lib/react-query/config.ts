import { QueryCache, QueryClientConfig } from '@tanstack/react-query';

const customQueryClientConfigs: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 2 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    onError: e => {
      console.log('error: ', e.message);
    },
  }),
};

export { customQueryClientConfigs };
