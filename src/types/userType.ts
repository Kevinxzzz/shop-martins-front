import { UserRole } from "@/shared/constants/userRoles";
import { Product } from "./productType";

export interface User {
  id: string;
  enterpriseId: string;
  name: string;
  email: string;
  whatsappPhone: string;
  profilePicture: string;
  role: UserRole;
  isActive: boolean;
  isFounder?: boolean;
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
  profileImageUrl?: string | null;
  role: UserRole;
  status: "ACTIVE" | "INACTIVE";
  isFounder?: boolean;
  createdAt: string;
  deletedAt: string | null;
}

export interface ProfileResponse {
  id: string;
  name: string;
  email: string;
  contactLink: string | null;
  profileImageUrl: string | null;
  role: string;
}

export interface UpdateProfileData {
  name?: string;
  email?: string;
  contactLink?: string;
}

export interface PublicSeller {
  id: string;
  name: string;
  imageUrl: string | null;
  productsCount: number;
}

export interface PublicVendorDetail {
  id: string;
  name: string;
  profileImageUrl: string | null;
  contactLink: string | null;
  products: Product[];
}
