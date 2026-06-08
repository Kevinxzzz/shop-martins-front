// ═══════════════════════════════════════════════════════════════
// React Query Keys
// Centraliza as chaves de query para evitar conflitos e strings mágicas
// ═══════════════════════════════════════════════════════════════

export const queryKeys = {
  auth: {
    all: ['auth'] as const,
    me: ['auth', 'me'] as const,
  },
  users: {
    all: ['users'] as const,
    list: ['users', 'list'] as const,
    profile: ['users', 'profile'] as const,
    publicList: ['users', 'public-list'] as const,
    publicDetail: (id: string) => ['users', 'public-detail', id] as const,
  },
  categories: {
    all: ['categories'] as const,
    list: ['categories', 'list'] as const,
    trash: ['categories', 'trash'] as const,
  },
  enterprise: {
    all: ['enterprise'] as const,
    detail: ['enterprise', 'detail'] as const,
    publicLink: ['enterprise', 'public-link'] as const,
  },
  products: {
    all: ['products'] as const,
    lists: () => ['products', 'list'] as const,
    publicList: (filters: Record<string, any>) => ['products', 'public-list', filters] as const,
    adminList: (filters: Record<string, any>) => ['products', 'admin-list', filters] as const,
    list: (userId: string, page: number) => ['products', 'list', userId, page] as const,
    detail: (productId: string) => ['products', 'detail', productId] as const,
  },
  tokens: {
    all: ['tokens'] as const,
    list: ['tokens', 'list'] as const,
  },
};

