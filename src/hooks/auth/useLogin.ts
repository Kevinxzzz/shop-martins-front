// ═══════════════════════════════════════════════════════════════
// Hook: useLogin
// Encapsula a mutation de login com React Query
// ═══════════════════════════════════════════════════════════════

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login, type LoginRequest, type LoginResponse } from '@/services/authService';
import { type ApiError } from '@/services/httpClient';
import { tokenStorage } from '@/lib/auth/tokenStorage';
import { queryKeys } from '@/lib/react-query/queryKeys';

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation<LoginResponse, ApiError, LoginRequest>({
    mutationFn: login,
    onSuccess: (response) => {
      tokenStorage.setAccessToken(response.token);
      queryClient.setQueryData(queryKeys.auth.me, response.user);
    },
  });
}
