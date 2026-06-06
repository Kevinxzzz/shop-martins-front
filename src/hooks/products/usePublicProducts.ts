import { useInfiniteQuery } from '@tanstack/react-query';
import { productService, type PublicProductFilters } from '@/services/productService';
import { type ApiError } from '@/services/httpClient';
import type { PaginatedProductsResponse } from '@/types/productType';
import { queryKeys } from '@/lib/react-query/queryKeys';

export function usePublicProducts(filters: PublicProductFilters) {
  return useInfiniteQuery<PaginatedProductsResponse, ApiError>({
    queryKey: queryKeys.products.publicList(filters),
    queryFn: ({ pageParam }) => 
      productService.getEnterpriseProductsPublic({ 
        ...filters, 
        page: pageParam as number,
        limit: filters.limit || 20 
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined;
    },
    staleTime: 5 * 60 * 1000,
  });
}
