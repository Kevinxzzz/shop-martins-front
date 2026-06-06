'use client';

// ═══════════════════════════════════════════════════════════════
// Provider: AuthProvider
// Controla o ciclo de vida da autenticação. React Query é a source of truth.
// ═══════════════════════════════════════════════════════════════

import { createContext, useEffect, useState, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import { useCurrentUser } from '@/hooks/auth/useCurrentUser';
import { tokenStorage } from '@/lib/auth/tokenStorage';
import { AUTH_EXPIRED_EVENT } from '@/lib/auth/authEvents';
import { queryKeys } from '@/lib/react-query/queryKeys';
import { FullScreenLoader } from '@/components/ui/FullScreenLoader';
import { type AuthUser } from '@/types';

export interface AuthContextValue {
  user: AuthUser | undefined;
  isAuthenticated: boolean;
  isLoading: boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data: user, isLoading: isUserLoading, isError } = useCurrentUser();
  
  const [isInitialCheckDone, setIsInitialCheckDone] = useState(false);

  // Deriva o estado de autenticação a partir da existência do token E do fetch
  const token = tokenStorage.getAccessToken();
  const isAuthenticated = !!user;
  
  // Consideramos carregando enquanto não checamos a primeira vez e o useQuery estiver rodando
  const isLoading = (!!token && isUserLoading) || !isInitialCheckDone;

  const logout = useCallback(async () => {
    tokenStorage.removeAccessToken();
    await queryClient.cancelQueries({ queryKey: queryKeys.auth.all });
    queryClient.removeQueries({ queryKey: queryKeys.auth.all });
    router.push('/login');
  }, [queryClient, router]);

  useEffect(() => {
    // Flag de montagem concluída para evitar SSR mismatch no token e lidar com hydration
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsInitialCheckDone(true);

    const handleAuthExpired = () => {
      logout();
    };

    window.addEventListener(AUTH_EXPIRED_EVENT, handleAuthExpired);
    return () => {
      window.removeEventListener(AUTH_EXPIRED_EVENT, handleAuthExpired);
    };
  }, [router, queryClient]); // eslint-disable-line react-hooks/exhaustive-deps

  // Efeito para limpar a sessão local caso o token exista mas a API rejeite o usuário (401/403)
  useEffect(() => {
    if (isError && token) {
      logout();
    }
  }, [isError, token]); // eslint-disable-line react-hooks/exhaustive-deps

  const value = useMemo(() => ({
    user,
    isAuthenticated,
    isLoading,
    logout
  }), [user, isAuthenticated, isLoading, logout]);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
