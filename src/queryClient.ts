import { QueryClient } from '@tanstack/react-query';

// react-query instance
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      refetchOnReconnect: false,
      retry: true,
      cacheTime: 0,
    },
  },
});
