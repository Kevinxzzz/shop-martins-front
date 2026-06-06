// ═══════════════════════════════════════════════════════════════
// SHOP MARTINS — Auth Service
// Centraliza todas as requisições HTTP de autenticação e cadastro
// ═══════════════════════════════════════════════════════════════

import { httpClient } from './httpClient';
import {
  LoginRequest,
  RegisterEnterpriseRequest,
  RegisterUserRequest,
  AuthUser,
  AuthEnterprise,
  LoginResponse,
  RegisterEnterpriseResponse,
  RegisterUserResponse,
  ValidateTokenResponse,
} from '@/types';

// ── Funções do Serviço ──────────────────────────────────────

/**
 * Realiza o login do usuário.
 * POST /auth/login
 */
export async function login(data: LoginRequest): Promise<LoginResponse> {
  const response = await httpClient.post<LoginResponse>('/auth/login', data);
  return response.data;
}

/**
 * Realiza o cadastro de uma nova empresa e seu administrador.
 * POST /enterprise/register
 */
export async function registerEnterprise(data: RegisterEnterpriseRequest): Promise<RegisterEnterpriseResponse> {
  const response = await httpClient.post<RegisterEnterpriseResponse>('/enterprise/register', data);
  return response.data;
}

/**
 * Realiza o cadastro de um novo usuário via convite.
 * POST /users/register/invite
 */
export async function registerUser(data: RegisterUserRequest): Promise<RegisterUserResponse> {
  const payload = {
    token: data.inviteToken,
    name: data.name,
    email: data.email,
    password: data.password
  };
  const response = await httpClient.post<RegisterUserResponse>('/auth/register-seller', payload);
  return response.data;
}



export async function validateToken(rawToken: string): Promise<ValidateTokenResponse> {
  const response = await httpClient.get<ValidateTokenResponse>(`/tokens/validate/${rawToken}`);
  return response.data;
}

/**
 * Recupera as informações do usuário logado na sessão atual.
 * GET /auth/me
 */
export async function getCurrentUser(): Promise<AuthUser> {
  const response = await httpClient.get<AuthUser>('/auth/me');
  return response.data;
}
