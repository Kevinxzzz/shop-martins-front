/**
 * Enum centralizado de roles de usuário.
 * Evita "magic strings" espalhadas pelo código.
 */
export enum UserRole {
  ADMIN = "ADMIN",
  SELLER = "SELLER",
}

export const userRoleTranslations: Record<UserRole, string> = {
  [UserRole.ADMIN]: "Admin",
  [UserRole.SELLER]: "Vendedor",
};
