// ═══════════════════════════════════════════════════════════════
// Hook: useUserProducts
// Busca a lista paginada de produtos de um usuário específico
// ═══════════════════════════════════════════════════════════════

import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { productService } from '@/services/productService';
import { type ApiError } from '@/services/httpClient';
import type { PaginatedProductsResponse } from '@/types/productType';
import { queryKeys } from '@/lib/react-query/queryKeys';

const PRODUCTS_PER_PAGE = 20;

export function useUserProducts(userId: string | undefined, page: number = 1) {
  return useQuery<PaginatedProductsResponse, ApiError>({
    queryKey: queryKeys.products.list(userId ?? '', page),
    queryFn: () => productService.getUserProducts(userId!, page, PRODUCTS_PER_PAGE),
    enabled: !!userId,
    staleTime: 5 * 60 * 1000, // 5 minutos
    retry: 1,
    placeholderData: keepPreviousData,
  });
}
