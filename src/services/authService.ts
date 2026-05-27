// ═══════════════════════════════════════════════════════════════
// SHOP MARTINS — Auth Service
// Centraliza todas as requisições HTTP de autenticação e cadastro
// ═══════════════════════════════════════════════════════════════

import { httpClient } from './httpClient';

// ── Tipagens de Requisição ──────────────────────────────────

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterEnterpriseRequest {
  document: string;
  name: string;
  contactLink?: string;
  userName: string;
  userEmail: string;
  userPassword: string;
}

export interface RegisterUserRequest {
  inviteToken: string;
  name: string;
  email: string;
  password: string;
}

// ── Tipagens de Resposta ────────────────────────────────────

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: string;
  enterpriseId?: string;
}

export interface AuthEnterprise {
  id: string;
  name: string;
  cnpj: string;
}

export interface LoginResponse {
  token: string;
  user: AuthUser;
}

export interface RegisterEnterpriseResponse {
  token: string;
  user: AuthUser;
  enterprise: AuthEnterprise;
}

export interface RegisterUserResponse {
  token: string;
  user: AuthUser;
}

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

export interface ValidateTokenResponse {
  valid: boolean;
  enterpriseName: string;
  maxUses: number;
  currentUses: number;
  expiredAt: string;
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
