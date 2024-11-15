'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC } from 'react';
import { createCustomQueryClient } from '~/src/lib/react-query';
import { ContainerProps } from '~/src/types/next';

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (typeof window === 'undefined') {
    return createCustomQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = createCustomQueryClient();
    return browserQueryClient;
  }
}

const ReactQueryProvider: FC<ContainerProps> = ({ children }) => {
  const queryClient = getQueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export { ReactQueryProvider };
