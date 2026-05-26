'use client';

// ═══════════════════════════════════════════════════════════════
// React Query Provider
// Provider global com ReactQueryDevtools condicional melhorada
// ═══════════════════════════════════════════════════════════════

import { useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { makeQueryClient } from './queryClient';

const isDev = process.env.NODE_ENV !== 'production';

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(makeQueryClient);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {isDev && (
        <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
      )}
    </QueryClientProvider>
  );
}
