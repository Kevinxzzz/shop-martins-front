import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUserRole } from '@/services/userService';
import { queryKeys } from '@/lib/react-query/queryKeys';
import { UserDTO } from '@/types';
import { getErrorMessage, ApiError } from '@/services/httpClient';
import { useToast } from '@/contexts/ToastContext';

interface UpdateRoleVariables {
  userId: string;
  role: string;
}

export function useUpdateUserRole() {
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  return useMutation<UserDTO, ApiError, UpdateRoleVariables>({
    mutationFn: ({ userId, role }) => updateUserRole(userId, role),
    
    onSuccess: () => {
      addToast({
        type: 'success',
        title: 'Cargo Atualizado',
        message: 'O cargo do usuário foi alterado com sucesso!',
      });
      queryClient.invalidateQueries({ queryKey: queryKeys.users.list });
    },

    onError: (error) => {
      const message = getErrorMessage(error, 'Erro ao atualizar o cargo do usuário.');
      addToast({
        type: 'error',
        title: 'Erro ao Atualizar',
        message,
      });
    }
  });
}
