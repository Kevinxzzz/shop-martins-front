import { AuthUser } from './userType';
import { AuthEnterprise } from './enterpriseType';

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
