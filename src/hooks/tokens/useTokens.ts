import { useQuery } from '@tanstack/react-query';
import { getTokens } from '@/services/tokenService';
import { type ApiError } from '@/services/httpClient';
import { type Token } from '@/types';
import { queryKeys } from '@/lib/react-query/queryKeys';

export function useTokens(page = 1, limit = 50) {
  return useQuery<Token[], ApiError>({
    queryKey: [...queryKeys.tokens.list, page, limit],
    queryFn: () => getTokens(page, limit),
    staleTime: 5 * 60 * 1000, // 5 minutos
    retry: 1,
  });
}
