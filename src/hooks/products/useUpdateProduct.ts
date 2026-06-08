import { useMutation, useQueryClient } from '@tanstack/react-query';
import { productService } from '@/services/productService';
import { queryKeys } from '@/lib/react-query/queryKeys';
import type { UpdateProductDTO } from '@/types/productType';

export function useUpdateProduct() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ productId, data }: { productId: string; data: UpdateProductDTO }) =>
      productService.updateProduct(productId, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.products.detail(variables.productId) });
      queryClient.invalidateQueries({ queryKey: queryKeys.products.all });
    },
  });
}
