// ═══════════════════════════════════════════════════════════════
// React Query Client Factory
// Cria instância do cliente usando os defaults
// ═══════════════════════════════════════════════════════════════

import { QueryClient } from '@tanstack/react-query';
import { defaultOptions } from './defaultOptions';

export function makeQueryClient() {
  return new QueryClient({
    defaultOptions,
  });
}
