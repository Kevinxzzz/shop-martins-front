// ═══════════════════════════════════════════════════════════════
// SHOP MARTINS — Category Service
// Centraliza todas as requisições HTTP relacionadas a categorias
// ═══════════════════════════════════════════════════════════════

import { httpClient } from './httpClient';
import type { 
  CategoryStatus, 
  CreateCategoryDTO, 
  UpdateCategoryDTO, 
  CategoryResponseDTO, 
  PaginatedCategoriesResponse 
} from '@/types/categoryType';

export interface GetCategoriesParams {
  page?: number;
  limit?: number;
  status?: CategoryStatus;
}

export async function getCategories(params?: GetCategoriesParams): Promise<PaginatedCategoriesResponse> {
  const response = await httpClient.get<PaginatedCategoriesResponse>('/categories', { params });
  return response.data;
}

export async function createCategory(data: CreateCategoryDTO): Promise<CategoryResponseDTO> {
  const response = await httpClient.post<CategoryResponseDTO>('/categories', data);
  return response.data;
}

export async function updateCategory({ id, data }: { id: string; data: UpdateCategoryDTO }): Promise<CategoryResponseDTO> {
  const response = await httpClient.patch<CategoryResponseDTO>(`/categories/${id}`, data);
  return response.data;
}

export async function archiveCategory(id: string): Promise<{ message: string }> {
  const response = await httpClient.patch<{ message: string }>(`/categories/${id}/archive`);
  return response.data;
}

export async function restoreCategory(id: string): Promise<{ message: string }> {
  const response = await httpClient.patch<{ message: string }>(`/categories/${id}/restore`);
  return response.data;
}

export async function deleteCategoryPermanently(id: string): Promise<{ message: string }> {
  const response = await httpClient.delete<{ message: string }>(`/categories/${id}`);
  return response.data;
}
