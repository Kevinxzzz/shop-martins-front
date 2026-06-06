import { useQuery } from '@tanstack/react-query';
import { getPublicEnterpriseLink } from '@/services/enterpriseService';
import { type ApiError } from '@/services/httpClient';
import { queryKeys } from '@/lib/react-query/queryKeys';

export function usePublicEnterpriseLink() {
  return useQuery<{ link: string | null }, ApiError>({
    queryKey: queryKeys.enterprise.publicLink,
    queryFn: getPublicEnterpriseLink,
    staleTime: 5 * 60 * 1000, // 5 minutos (o link público muda raramente)
    retry: 1,
  });
}
