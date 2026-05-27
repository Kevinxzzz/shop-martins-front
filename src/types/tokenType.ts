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

