// ═══════════════════════════════════════════════════════════════
// Token Storage Utility
// Abstrai a camada de armazenamento de tokens (preparado para futura migração para cookies)
// ═══════════════════════════════════════════════════════════════

const TOKEN_KEY = 'shop-martins-token';

export const tokenStorage = {
  getAccessToken: (): string | null => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(TOKEN_KEY);
  },

  setAccessToken: (token: string): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(TOKEN_KEY, token);
  },

  removeAccessToken: (): void => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(TOKEN_KEY);
  },
};
