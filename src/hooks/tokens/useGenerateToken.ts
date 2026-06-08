import { useMutation, useQueryClient } from '@tanstack/react-query';
import { generateToken } from '@/services/tokenService';
import { queryKeys } from '@/lib/react-query/queryKeys';
import { type CreateTokenData } from '@/types';
import { getErrorMessage, ApiError } from '@/services/httpClient';
import { useToast } from '@/contexts/ToastContext';

export function useGenerateToken() {
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  return useMutation<{ id: string; rawToken: string; createdAt: string }, ApiError, CreateTokenData>({
    mutationFn: (data) => generateToken(data),
    
    onSuccess: () => {
      addToast({
        type: 'success',
        title: 'Convite Gerado',
        message: 'O link de convite foi gerado com sucesso!',
      });
      queryClient.invalidateQueries({ queryKey: queryKeys.tokens.all });
    },

    onError: (error) => {
      const message = getErrorMessage(error, 'Erro ao gerar convite.');
      addToast({
        type: 'error',
        title: 'Erro ao Gerar',
        message,
      });
    }
  });
}
