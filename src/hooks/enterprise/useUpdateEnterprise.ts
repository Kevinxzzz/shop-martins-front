import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateEnterprise } from '@/services/enterpriseService';
import { type ApiError } from '@/services/httpClient';
import { type EnterpriseDTO, type UpdateEnterpriseData } from '@/types';
import { queryKeys } from '@/lib/react-query/queryKeys';

export function useUpdateEnterprise() {
  const queryClient = useQueryClient();

  return useMutation<EnterpriseDTO, ApiError, UpdateEnterpriseData>({
    mutationFn: updateEnterprise,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: queryKeys.enterprise.detail });
    },
  });
}
