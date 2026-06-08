// ═══════════════════════════════════════════════════════════════
// SHOP MARTINS — User Service
// Centraliza todas as requisições HTTP relacionadas a usuários
// ═══════════════════════════════════════════════════════════════

import { httpClient } from "./httpClient";
import { UserDTO, ProfileResponse, UpdateProfileData, PublicSeller, PublicVendorDetail } from "@/types";
import { Product, Media } from "@/types/productType";
import { UserRole } from "@/shared/constants/userRoles";

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

/**
 * Retorna os vendedores públicos da empresa padrão.
 * GET /users/enterprise-martins
 */
export async function getPublicSellers(): Promise<PublicSeller[]> {
  const response = await httpClient.get<PublicSeller[]>("/users/enterprise-martins");
  return response.data;
}

/**
 * Retorna os detalhes de um vendedor público específico, incluindo seus produtos.
 * GET /users/enterprise-martins/:id
 */
export async function getPublicUserById(userId: string): Promise<PublicVendorDetail> {
  const response = await httpClient.get<any>(`/users/enterprise-martins/${userId}`);
  const raw = response.data;

  const products: Product[] = (raw.products || []).map((p: any) => {
    const media: Media[] = (p.media || []).map((m: any) => ({
      id: m.id,
      fileUrl: m.url,
      type: m.type === 'FOTO' ? 'image' : 'video',
      isMain: m.isMain || false,
      order: m.order || 0,
      productId: p.id,
    }));

    media.sort((a, b) => a.order - b.order);

    const categories = (p.categories || []).map((rc: any) => ({
      id: rc.category?.id,
      name: rc.category?.name || '',
      slug: rc.category?.slug || '',
    }));

    const categoryId = p.categories?.[0]?.category?.id || '';

    return {
      id: p.id,
      title: p.name || '',
      description: '',
      price: p.price || 0,
      categoryId,
      sellerId: raw.id,
      enterpriseId: '',
      countViews: p.countViews || 0,
      media,
      createdAt: p.createdAt,
      category: categories[0],
      categories,
      seller: {
        id: raw.id,
        name: raw.name,
        email: '',
        whatsappPhone: '',
        profilePicture: raw.profileImageUrl || '',
        role: UserRole.SELLER,
        isActive: true,
        enterpriseId: '',
      },
    };
  });

  return {
    id: raw.id,
    name: raw.name,
    profileImageUrl: raw.profileImageUrl,
    contactLink: raw.contactLink,
    products,
  };
}

