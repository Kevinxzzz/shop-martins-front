// ═══════════════════════════════════════════════════════════════
// SHOP MARTINS — Product Service
// Centraliza todas as requisições HTTP relacionadas a produtos
// ═══════════════════════════════════════════════════════════════

import { httpClient } from './httpClient';
import type { CreateProductDTO, UpdateProductDTO, UpdateProductMediaDTO } from '@/types/productDTO';
import type { Product, PaginatedProductsResponse, PublicProductDetail } from '@/types/productType';
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

  const categories = (raw.categories || []).map((rc: any) => ({
    id: rc.category?.id || rc.categoryId,
    name: rc.category?.name || '',
    slug: rc.category?.slug || '',
  }));

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
    category: categories[0],
    categories,
    seller: raw.user ? {
      id: raw.user.id,
      name: raw.user.name,
      email: '',
      whatsappPhone: '',
      profilePicture: raw.user.profileImageUrl || '',
      role: UserRole.SELLER,
      isActive: true,
      enterpriseId: raw.enterpriseId,
    } : undefined,
  };
}

export interface GetAdminProductsParams {
  page?: number;
  limit?: number;
  search?: string;
  categoryId?: string | string[];
  sellerId?: string | string[];
  minPrice?: number;
  maxPrice?: number;
}

export interface PublicProductFilters {
  page?: number;
  limit?: number;
  search?: string;
  categoryId?: string | string[];
  minPrice?: number;
  maxPrice?: number;
}

export const productService = {

  async getEnterpriseProductsPublic(params: PublicProductFilters): Promise<PaginatedProductsResponse> {
    const response = await httpClient.get<any>('/products/enterprise-martins', { params });
    
    const mappedProducts = (response.data.products || []).map(mapBackendProductToFrontend);

    return {
      products: mappedProducts,
      page: response.data.page,
      limit: response.data.limit,
      totalItems: response.data.totalItems,
      totalPages: response.data.totalPages,
    };
  },

  async getAdminProducts(params: GetAdminProductsParams): Promise<PaginatedProductsResponse> {
    const response = await httpClient.get<any>('/products/enterprise', { params });
    
    const mappedProducts = (response.data.products || []).map(mapBackendProductToFrontend);

    return {
      products: mappedProducts,
      page: response.data.page,
      limit: response.data.limit,
      totalItems: response.data.totalItems,
      totalPages: response.data.totalPages,
    };
  },

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

  async getProductById(productId: string): Promise<PublicProductDetail> {
    const response = await httpClient.get<PublicProductDetail>(`/products/${productId}`);
    return response.data;
  },

  async updateProduct(productId: string, data: UpdateProductDTO): Promise<Product> {
    const response = await httpClient.put<any>(`/products/${productId}`, data);
    return mapBackendProductToFrontend(response.data);
  },

  async updateProductMedia(productId: string, data: UpdateProductMediaDTO): Promise<Product> {
    const formData = new FormData();
    data.keepMediaIds.forEach((id) => formData.append('keepMediaIds[]', id));
    data.files.forEach((file) => formData.append('files', file));

    const response = await httpClient.put<any>(`/products/${productId}/media`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return mapBackendProductToFrontend(response.data);
  },
};

