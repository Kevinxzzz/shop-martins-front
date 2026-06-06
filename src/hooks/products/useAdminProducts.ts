import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { productService, type GetAdminProductsParams } from '@/services/productService';
import { type ApiError } from '@/services/httpClient';
import type { PaginatedProductsResponse } from '@/types/productType';
import { queryKeys } from '@/lib/react-query/queryKeys';

export function useAdminProducts(filters: GetAdminProductsParams) {
  return useQuery<PaginatedProductsResponse, ApiError>({
    queryKey: queryKeys.products.adminList(filters),
    queryFn: () => productService.getAdminProducts(filters),
    staleTime: 5 * 60 * 1000,
    retry: 1,
    placeholderData: keepPreviousData,
  });
}
