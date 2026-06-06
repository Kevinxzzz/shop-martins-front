// ═══════════════════════════════════════════════════════════════
// Hook: useRegisterEnterprise
// Encapsula a mutation de cadastro de empresa com React Query
// ═══════════════════════════════════════════════════════════════

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { registerEnterprise } from '@/services/authService';
import { type RegisterEnterpriseRequest, type RegisterEnterpriseResponse } from '@/types';
import { type ApiError } from '@/services/httpClient';
import { tokenStorage } from '@/lib/auth/tokenStorage';
import { queryKeys } from '@/lib/react-query/queryKeys';

export function useRegisterEnterprise() {
  const queryClient = useQueryClient();

  return useMutation<RegisterEnterpriseResponse, ApiError, RegisterEnterpriseRequest>({
    mutationFn: registerEnterprise,
    onSuccess: (response) => {
      tokenStorage.setAccessToken(response.token);
      queryClient.setQueryData(queryKeys.auth.me, response.user);
    },
  });
}
