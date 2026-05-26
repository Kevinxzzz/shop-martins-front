// ═══════════════════════════════════════════════════════════════
// Auth Events
// Desacopla a camada de rede do React Context
// ═══════════════════════════════════════════════════════════════

export const AUTH_EXPIRED_EVENT = 'auth-expired';

export function dispatchAuthExpired() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(AUTH_EXPIRED_EVENT));
  }
}
