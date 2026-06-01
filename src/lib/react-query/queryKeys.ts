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
  },
  categories: {
    all: ['categories'] as const,
    list: ['categories', 'list'] as const,
    trash: ['categories', 'trash'] as const,
  },
  enterprise: {
    all: ['enterprise'] as const,
    detail: ['enterprise', 'detail'] as const,
  },
};
