export interface Token {
  id: string;
  token: string;
  inviteUrl: string;
  maxUses: number;
  createdAt: string;
  expiredAt: string;
  canceledAt: string | null;
  _count: {
    usedBy: number;
  };
  status: 'ACTIVE' | 'EXPIRED' | 'CANCELED' | 'MAXED_OUT';
}

export interface CreateTokenData {
  maxUses: number;
  expiredAt: string;
}

export interface ValidateTokenResponse {
  valid: boolean;
  enterpriseName: string;
  maxUses: number;
  currentUses: number;
  expiredAt: string;
}

