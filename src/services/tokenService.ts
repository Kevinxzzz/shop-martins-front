import { httpClient } from './httpClient';
import type { Token, CreateTokenData } from '@/types';

export async function getTokens(page = 1, limit = 50): Promise<Token[]> {
  const response = await httpClient.get<{ data: Token[], meta: any }>(`/tokens?page=${page}&limit=${limit}`);
  return response.data.data;
}

export async function generateToken(data: CreateTokenData): Promise<Token> {
  const response = await httpClient.post<{ id: string; rawToken: string; createdAt: string }>('/tokens', data);
  return {
    id: response.data.id,
    token: response.data.rawToken,
    inviteUrl: `${process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000'}/convite/${response.data.rawToken}`,
    maxUses: data.maxUses,
    createdAt: response.data.createdAt,
    expiredAt: data.expiredAt,
    canceledAt: null,
    _count: { usedBy: 0 },
    status: 'ACTIVE',
  } as any;
}

export async function revokeToken(tokenId: string): Promise<void> {
  await httpClient.delete(`/tokens/${tokenId}`);
}
