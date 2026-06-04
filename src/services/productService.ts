// ═══════════════════════════════════════════════════════════════
// SHOP MARTINS — Product Service
// Centraliza todas as requisições HTTP relacionadas a produtos
// ═══════════════════════════════════════════════════════════════

import { httpClient } from './httpClient';
import type { CreateProductDTO } from '@/types/productDTO';
import type { Product, PaginatedProductsResponse } from '@/types/productType';
import type { Media } from '@/types/mediaType';
import { UserRole } from '@/shared/constants/userRoles';

function mapBackendProductToFrontend(raw: any): Product {
  const media: Media[] = (raw.media || []).map((m: any) => ({
    id: m.id,
    fileUrl: m.url, // Backend uses 'url', Frontend expects 'fileUrl'
    type: m.type === 'FOTO' ? 'image' : 'video', // Backend FOTO -> image, VIDEO -> video
    order: m.order || 0,
    productId: m.productId,
  }));

  // Sort media by order
  media.sort((a, b) => a.order - b.order);

  const categoryId = raw.categories?.[0]?.categoryId || '';

  return {
    id: raw.id,
    title: raw.name || '', // Backend uses 'name', Frontend expects 'title'
    description: raw.description || '',
    price: raw.price || 0,
    categoryId,
    sellerId: raw.userId || '',
    enterpriseId: raw.enterpriseId || '',
    countViews: raw.countViews || 0,
    media,
    createdAt: raw.createdAt,
    seller: raw.user ? {
      id: raw.user.id,
      name: raw.user.name,
      email: '',
      whatsappPhone: '',
      profilePicture: '',
      role: UserRole.SELLER,
      isActive: true,
      enterpriseId: raw.enterpriseId,
    } : undefined,
  };
}

export const productService = {
  async createProduct(data: CreateProductDTO): Promise<Product> {
    const response = await httpClient.post<any>('/products', data);
    return mapBackendProductToFrontend(response.data);
  },

  async getUserProducts(userId: string, page: number = 1, limit: number = 20): Promise<PaginatedProductsResponse> {
    const response = await httpClient.get<any>(`/products/user/${userId}`, {
      params: { page, limit },
    });
    
    const mappedProducts = (response.data.products || []).map(mapBackendProductToFrontend);

    return {
      products: mappedProducts,
      page: response.data.page,
      limit: response.data.limit,
      totalItems: response.data.totalItems,
      totalPages: response.data.totalPages,
    };
  },

  async deleteProduct(productId: string): Promise<{ message: string }> {
    const response = await httpClient.delete<{ message: string }>(`/products/${productId}`);
    return response.data;
  },
};

