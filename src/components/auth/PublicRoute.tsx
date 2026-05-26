'use client';

// ═══════════════════════════════════════════════════════════════
// Public Route Guard
// Redireciona usuários logados para fora de rotas públicas (como /login)
// ═══════════════════════════════════════════════════════════════

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/auth/useAuth';
import { FullScreenLoader } from '@/components/ui/FullScreenLoader';

export function PublicRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace('/');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  if (isAuthenticated) {
    return null; // Evita flickering antes do redirect
  }

  return <>{children}</>;
}
