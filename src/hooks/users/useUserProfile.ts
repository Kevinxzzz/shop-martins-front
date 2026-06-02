import { useQuery } from '@tanstack/react-query';
import { getProfile } from '@/services/userService';
import { queryKeys } from '@/lib/react-query/queryKeys';

export function useUserProfile() {
  return useQuery({
    queryKey: queryKeys.users.profile,
    queryFn: getProfile,
  });
}
