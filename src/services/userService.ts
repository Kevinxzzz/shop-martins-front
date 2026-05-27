// ═══════════════════════════════════════════════════════════════
// SHOP MARTINS — User Service
// Centraliza todas as requisições HTTP relacionadas a usuários
// ═══════════════════════════════════════════════════════════════

import { httpClient } from './httpClient';
import { UserDTO } from '@/types';

// ── Funções do Serviço ──────────────────────────────────────

/**
 * Lista todos os usuários pertencentes à mesma empresa do usuário logado.
 * GET /users
 */
export async function getUsers(): Promise<UserDTO[]> {
  const response = await httpClient.get<UserDTO[]>('/users');
  return response.data;
}
