// ═══════════════════════════════════════════════════════════════
// SHOP MARTINS — Product Service
// Centraliza todas as requisições HTTP relacionadas a produtos
// ═══════════════════════════════════════════════════════════════

import { httpClient } from './httpClient';
import type { CreateProductDTO } from '@/types/productDTO';
import type { Product } from '@/types/productType';

export const productService = {
  async createProduct(data: CreateProductDTO): Promise<Product> {
    const response = await httpClient.post<Product>('/products', data);
    return response.data;
  },
};
