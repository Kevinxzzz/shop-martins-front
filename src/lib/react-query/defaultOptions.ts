// ═══════════════════════════════════════════════════════════════
// React Query Default Options
// Opções padrão globais
// ═══════════════════════════════════════════════════════════════

import { DefaultOptions } from '@tanstack/react-query';

export const defaultOptions: DefaultOptions = {
  queries: {
    staleTime: 5 * 60 * 1000, // 5 minutos
    gcTime: 10 * 60 * 1000,   // 10 minutos
    retry: 1,
    refetchOnWindowFocus: false,
  },
  mutations: {
    retry: 0,
  },
};
