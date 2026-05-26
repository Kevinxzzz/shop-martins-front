// ═══════════════════════════════════════════════════════════════
// React Query Keys
// Centraliza as chaves de query para evitar conflitos e strings mágicas
// ═══════════════════════════════════════════════════════════════

export const queryKeys = {
  auth: {
    all: ['auth'] as const,
    me: ['auth', 'me'] as const,
  },
  // Expanda conforme necessário:
  // products: { ... },
};
