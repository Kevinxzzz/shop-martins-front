import { UserRole as SystemUserRole } from '@/shared/constants/userRoles';

export type UserRole = 'ADMIN' | 'VENDOR';

export interface User {
  id: string;
  enterpriseId: string;
  name: string;
  email: string;
  whatsappPhone: string;
  profilePicture: string;
  role: UserRole;
  isActive: boolean;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: string;
  enterpriseId?: string;
}

export interface UserDTO {
  id: string;
  name: string;
  email: string;
  role: SystemUserRole;
  status: 'ACTIVE' | 'INACTIVE';
  createdAt: string;
  deletedAt: string | null;
}
