import { useQuery } from '@tanstack/react-query';
import { getPublicUserById } from '@/services/userService';
import { queryKeys } from '@/lib/react-query/queryKeys';

export function usePublicUserDetail(userId: string) {
  return useQuery({
    queryKey: queryKeys.users.publicDetail(userId),
    queryFn: () => getPublicUserById(userId),
    enabled: !!userId,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
