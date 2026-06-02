import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProfile } from '@/services/userService';
import { queryKeys } from '@/lib/react-query/queryKeys';
import { ProfileResponse, UpdateProfileData } from '@/types';
import { getErrorMessage, ApiError } from '@/services/httpClient';

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  return useMutation<ProfileResponse, ApiError, UpdateProfileData>({
    mutationFn: (data) => updateProfile(data),
    
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.users.profile });
    },

    onError: (error) => {
      const message = getErrorMessage(error, 'Erro ao atualizar perfil.');
      alert(message); // Ou toast dependendo do que está configurado
    }
  });
}
