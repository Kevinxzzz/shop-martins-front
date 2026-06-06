// ═══════════════════════════════════════════════════════════════
// Hook: useCurrentUser
// Busca os dados da sessão global. Source of truth de autenticação.
// ═══════════════════════════════════════════════════════════════

import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '@/services/authService';
import { type AuthUser } from '@/types';
import { type ApiError } from '@/services/httpClient';
import { queryKeys } from '@/lib/react-query/queryKeys';
import { tokenStorage } from '@/lib/auth/tokenStorage';

export function useCurrentUser() {
  const token = tokenStorage.getAccessToken();

  return useQuery<AuthUser, ApiError>({
    queryKey: queryKeys.auth.me,
    queryFn: getCurrentUser,
    enabled: !!token,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
}
