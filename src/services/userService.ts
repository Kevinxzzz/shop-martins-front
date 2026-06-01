// ═══════════════════════════════════════════════════════════════
// SHOP MARTINS — User Service
// Centraliza todas as requisições HTTP relacionadas a usuários
// ═══════════════════════════════════════════════════════════════

import { httpClient } from "./httpClient";
import { UserDTO, ProfileResponse, UpdateProfileData } from "@/types";

// ── Funções do Serviço ──────────────────────────────────────

/**
 * Lista todos os usuários pertencentes à mesma empresa do usuário logado.
 * GET /users
 */
export async function getUsers(): Promise<UserDTO[]> {
  const response = await httpClient.get<UserDTO[]>("/users");
  return response.data;
}

/**
 * Altera a role de um usuário.
 * PATCH /users/:id/role
 */
export async function updateUserRole(userId: string, role: string): Promise<UserDTO> {
  const response = await httpClient.patch<UserDTO>(`/users/${userId}/role`, { role });
  return response.data;
}

/**
 * Busca o perfil completo do usuário logado.
 * GET /users/profile
 */
export async function getProfile(): Promise<ProfileResponse> {
  const response = await httpClient.get<ProfileResponse>("/users/profile");
  return response.data;
}

/**
 * Atualiza o perfil do usuário logado.
 * PATCH /users/profile
 */
export async function updateProfile(data: UpdateProfileData): Promise<ProfileResponse> {
  const response = await httpClient.patch<ProfileResponse>("/users/profile", data);
  return response.data;
}
