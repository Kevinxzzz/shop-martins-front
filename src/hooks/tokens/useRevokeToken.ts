import { useMutation, useQueryClient } from '@tanstack/react-query';
import { revokeToken } from '@/services/tokenService';
import { queryKeys } from '@/lib/react-query/queryKeys';
import { getErrorMessage, ApiError } from '@/services/httpClient';
import { useToast } from '@/contexts/ToastContext';

export function useRevokeToken() {
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  return useMutation<void, ApiError, string>({
    mutationFn: (tokenId) => revokeToken(tokenId),
    
    onSuccess: () => {
      addToast({
        type: 'success',
        title: 'Convite Revogado',
        message: 'O link de convite foi revogado com sucesso!',
      });
      queryClient.invalidateQueries({ queryKey: queryKeys.tokens.all });
    },

    onError: (error) => {
      const message = getErrorMessage(error, 'Erro ao revogar o convite.');
      addToast({
        type: 'error',
        title: 'Erro ao Revogar',
        message,
      });
    }
  });
}
