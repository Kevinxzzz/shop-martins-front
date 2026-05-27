// ═══════════════════════════════════════════════════════════════
// Hook: useUsers
// Busca a lista de usuários da empresa do usuário logado.
// ═══════════════════════════════════════════════════════════════

import { useQuery } from '@tanstack/react-query';
import { getUsers } from '@/services/userService';
import { type ApiError } from '@/services/httpClient';
import { type UserDTO } from '@/types';
import { queryKeys } from '@/lib/react-query/queryKeys';

export function useUsers() {
  return useQuery<UserDTO[], ApiError>({
    queryKey: queryKeys.users.list,
    queryFn: getUsers,
    staleTime: 10 * 60 * 1000, // 10 minutos
    retry: 1,
  });
}
