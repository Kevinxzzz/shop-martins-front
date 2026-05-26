// ═══════════════════════════════════════════════════════════════
// SHOP MARTINS — HTTP Client (Axios Instance)
// ═══════════════════════════════════════════════════════════════

import axios, { AxiosError } from 'axios';
import { tokenStorage } from '@/lib/auth/tokenStorage';
import { dispatchAuthExpired } from '@/lib/auth/authEvents';

// ── Tipos de Erro ───────────────────────────────────────────
export interface ApiErrorResponse {
  error: string;
  details?: Array<{ message: string; path?: string[] }>;
}

export class ApiError extends Error {
  public readonly statusCode: number;
  public readonly details?: ApiErrorResponse['details'];

  constructor(message: string, statusCode: number, details?: ApiErrorResponse['details']) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.details = details;
  }
}

/**
 * Extrai a mensagem de erro legível de qualquer erro,
 * tratando especialmente instâncias de ApiError.
 */
export function getErrorMessage(error: unknown, fallback = 'Erro inesperado. Tente novamente.'): string {
  if (error instanceof ApiError) {
    return error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return fallback;
}

// ── Instância Axios ─────────────────────────────────────────
const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 15000,
});

// ── Interceptor de Requisição ───────────────────────────────
httpClient.interceptors.request.use((config) => {
  const token = tokenStorage.getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ── Variável de controle para evitar múltiplos redirects ────
let isRedirecting = false;

// ── Interceptor de Resposta ─────────────────────────────────
httpClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiErrorResponse>) => {
    if (error.response) {
      const { data, status } = error.response;
      
      // Tratamento global de token expirado/inválido
      if (status === 401) {
        if (!isRedirecting) {
          isRedirecting = true;
          dispatchAuthExpired();
          
          // Reset da flag após um tempo razoável caso a navegação falhe ou recupere
          setTimeout(() => {
            isRedirecting = false;
          }, 2000);
        }
      }

      const message = data?.error || 'Erro inesperado no servidor.';
      const details = data?.details;

      throw new ApiError(message, status, details);
    }

    if (error.code === 'ECONNABORTED') {
      throw new ApiError('A requisição excedeu o tempo limite. Tente novamente.', 408);
    }

    if (!error.response) {
      throw new ApiError('Não foi possível conectar ao servidor. Verifique sua conexão.', 0);
    }

    throw new ApiError('Erro inesperado. Tente novamente.', 500);
  },
);

export { httpClient };
