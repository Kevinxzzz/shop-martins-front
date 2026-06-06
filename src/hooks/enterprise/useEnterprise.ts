import { useQuery } from '@tanstack/react-query';
import { getEnterprise } from '@/services/enterpriseService';
import { type ApiError } from '@/services/httpClient';
import { type EnterpriseDTO } from '@/types';
import { queryKeys } from '@/lib/react-query/queryKeys';

export function useEnterprise() {
  return useQuery<EnterpriseDTO, ApiError>({
    queryKey: queryKeys.enterprise.detail,
    queryFn: getEnterprise,
    staleTime: 1 * 60 * 1000, // 1 minuto (ideal para settings administrativos)
    retry: 1,
  });
}
