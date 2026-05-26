// ═══════════════════════════════════════════════════════════════
// Hook: useRegisterUser
// Encapsula a mutation de cadastro de usuário com React Query
// ═══════════════════════════════════════════════════════════════

import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  registerUser,
  type RegisterUserRequest,
  type RegisterUserResponse,
} from '@/services/authService';
import { type ApiError } from '@/services/httpClient';
import { tokenStorage } from '@/lib/auth/tokenStorage';
import { queryKeys } from '@/lib/react-query/queryKeys';

export function useRegisterUser() {
  const queryClient = useQueryClient();

  return useMutation<RegisterUserResponse, ApiError, RegisterUserRequest>({
    mutationFn: registerUser,
    onSuccess: (response) => {
      tokenStorage.setAccessToken(response.token);
      queryClient.setQueryData(queryKeys.auth.me, response.user);
    },
  });
}
