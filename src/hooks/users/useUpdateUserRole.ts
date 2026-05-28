import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUserRole } from '@/services/userService';
import { queryKeys } from '@/lib/react-query/queryKeys';
import { UserDTO } from '@/types';
import { getErrorMessage, ApiError } from '@/services/httpClient';

interface UpdateRoleVariables {
  userId: string;
  role: string;
}

export function useUpdateUserRole() {
  const queryClient = useQueryClient();

  return useMutation<UserDTO, ApiError, UpdateRoleVariables>({
    mutationFn: ({ userId, role }) => updateUserRole(userId, role),
    
    onSuccess: () => {
      alert('Cargo atualizado com sucesso!');
      queryClient.invalidateQueries({ queryKey: queryKeys.users.list });
    },

    onError: (error) => {
      const message = getErrorMessage(error, 'Erro ao atualizar o cargo do usuário.');
      alert(message);
    }
  });
}
