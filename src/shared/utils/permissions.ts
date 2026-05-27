import { UserRole } from "../constants/userRoles";

/**
 * Verifica se o usuário possui role de ADMIN.
 */
export function isAdmin(role: string | undefined | null): boolean {
  return role === UserRole.ADMIN;
}

/**
 * Verifica se o usuário possui uma role específica.
 */
export function hasRole(
  userRole: string | undefined | null,
  requiredRole: UserRole
): boolean {
  return userRole === requiredRole;
}
