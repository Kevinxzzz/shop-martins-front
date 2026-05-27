// ═══════════════════════════════════════════════════════════════
// Hook: useCategories
// Busca a lista de categorias paginadas e filtradas
// ═══════════════════════════════════════════════════════════════

import { useQuery } from '@tanstack/react-query';
import { getCategories, GetCategoriesParams } from '@/services/categoryService';
import { type ApiError } from '@/services/httpClient';
import type { PaginatedCategoriesResponse } from '@/types/categoryType';
import { queryKeys } from '@/lib/react-query/queryKeys';

export function useCategories(params?: GetCategoriesParams) {
  const queryKey = params?.status === "DELETED" 
    ? [...queryKeys.categories.trash, params] 
    : [...queryKeys.categories.list, params];

  return useQuery<PaginatedCategoriesResponse, ApiError>({
    queryKey,
    queryFn: () => getCategories(params),
    staleTime: 5 * 60 * 1000, // 5 minutos
    retry: 1,
  });
}
