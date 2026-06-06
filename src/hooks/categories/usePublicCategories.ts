import { useQuery } from '@tanstack/react-query';
import { getPublicCategories, GetCategoriesParams } from '@/services/categoryService';
import { type ApiError } from '@/services/httpClient';
import type { PaginatedCategoriesResponse } from '@/types/categoryType';
import { queryKeys } from '@/lib/react-query/queryKeys';

export function usePublicCategories(params?: GetCategoriesParams) {
  return useQuery<PaginatedCategoriesResponse, ApiError>({
    queryKey: ['public', ...queryKeys.categories.list, params],
    queryFn: () => getPublicCategories(params),
    staleTime: 5 * 60 * 1000, // 5 minutos
    retry: 1,
  });
}
