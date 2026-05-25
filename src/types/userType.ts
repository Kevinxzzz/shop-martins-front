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
