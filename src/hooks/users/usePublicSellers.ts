import { useQuery } from '@tanstack/react-query';
import { getPublicSellers } from '@/services/userService';
import { queryKeys } from '@/lib/react-query/queryKeys';

export function usePublicSellers() {
  return useQuery({
    queryKey: queryKeys.users.publicList,
    queryFn: getPublicSellers,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
