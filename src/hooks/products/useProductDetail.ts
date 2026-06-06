import { useQuery } from '@tanstack/react-query';
import { productService } from '@/services/productService';
import { queryKeys } from '@/lib/react-query/queryKeys';

export function useProductDetail(productId: string) {
  return useQuery({
    queryKey: queryKeys.products.detail(productId),
    queryFn: () => productService.getProductById(productId),
    enabled: !!productId,
    staleTime: 5 * 60 * 1000,
  });
}
