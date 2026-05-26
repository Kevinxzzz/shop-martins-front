'use client';

// ═══════════════════════════════════════════════════════════════
// Protected Route Guard
// Garante que o conteúdo filho só seja acessível por usuários autenticados
// ═══════════════════════════════════════════════════════════════

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/auth/useAuth';
import { FullScreenLoader } from '@/components/ui/FullScreenLoader';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  if (!isAuthenticated) {
    return null; // Evita flickering antes do redirect
  }

  return <>{children}</>;
}
