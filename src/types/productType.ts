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

export interface PublicProductDetail {
  id: string;
  name: string;
  description: string;
  price: number;
  countViews: number;

  categories: {
    category: {
      id: string;
      name: string;
      slug: string;
    };
  }[];

  media: {
    id: string;
    url: string;
    type: 'FOTO' | 'VIDEO';
    isMain: boolean;
    order: number;
  }[];

  user: {
    id: string;
    name: string;
    contactLink: string;
    profilePicture?: string;
    profileImageUrl?: string;
  };
}
