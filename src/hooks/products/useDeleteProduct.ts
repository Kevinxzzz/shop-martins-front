// ═══════════════════════════════════════════════════════════════
// Hook: useDeleteProduct
// Mutação para excluir um produto e invalidar o cache da listagem
// ═══════════════════════════════════════════════════════════════

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { productService } from '@/services/productService';
import { type ApiError } from '@/services/httpClient';
import { queryKeys } from '@/lib/react-query/queryKeys';

export function useDeleteProduct() {
  const queryClient = useQueryClient();

  return useMutation<{ message: string }, ApiError, string>({
    mutationKey: ['products', 'delete'],
    mutationFn: (productId: string) => productService.deleteProduct(productId),
    onSuccess: () => {
      // Invalida todas as listas de produtos em cache (qualquer página/userId)
      queryClient.invalidateQueries({ queryKey: queryKeys.products.lists() });
    },
  });
}
