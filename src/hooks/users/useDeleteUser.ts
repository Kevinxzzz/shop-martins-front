import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser } from '@/services/userService';
import { queryKeys } from '@/lib/react-query/queryKeys';
import { getErrorMessage, ApiError } from '@/services/httpClient';
import { useToast } from '@/contexts/ToastContext';

export function useDeleteUser() {
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  return useMutation<void, ApiError, string>({
    mutationFn: (userId) => deleteUser(userId),
    
    onSuccess: () => {
      addToast({
        type: 'success',
        title: 'Usuário Excluído',
        message: 'O usuário foi excluído permanentemente com sucesso!',
      });
      // Invalida apenas a listagem administrativa de usuários
      queryClient.invalidateQueries({ queryKey: queryKeys.users.list });
    },

    onError: (error) => {
      const message = getErrorMessage(error, 'Não foi possível excluir o usuário.');
      addToast({
        type: 'error',
        title: 'Erro ao Excluir',
        message,
      });
    }
  });
}
