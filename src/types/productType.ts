import { Category } from './categoryType';
import { User } from './userType';
import { Media } from './mediaType';

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  categoryId: string;
  sellerId: string;
  enterpriseId: string;
  countViews: number;
  media: Media[];
  category?: Category;
  seller?: User;
  createdAt: string;
}

export interface PaginatedProductsResponse {
  products: Product[];
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
}
