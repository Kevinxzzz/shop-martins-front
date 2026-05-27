'use client';

/**
 * Route Guard para rotas administrativas.
 * Redireciona usuários sem permissão de ADMIN para /dashboard.
 * Garante que mesmo acessando a URL diretamente, o SELLER não veja conteúdo admin.
 */

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/auth/useAuth';
import { isAdmin } from '@/shared/utils/permissions';
import { FullScreenLoader } from '@/components/ui/FullScreenLoader';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && (!user || !isAdmin(user.role))) {
      router.replace('/dashboard');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  if (!user || !isAdmin(user.role)) {
    // Retorna loader enquanto o redirect acontece
    return <FullScreenLoader />;
  }

  return <>{children}</>;
}
