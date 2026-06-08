import { Category } from "./categoryType";
import { User } from "./userType";

export interface Media {
  id: string;
  fileUrl: string;
  type: "image" | "video";
  isMain?: boolean;
  order: number;
  productId: string;
}

export interface MediaUploadDTO {
  url: string;
  key: string;
  type: "FOTO" | "VIDEO";
  isMain?: boolean;
}

export interface CreateProductDTO {
  name: string;
  description?: string;
  price?: number; // Integer (cents)
  categoryIds?: string[];
  media?: MediaUploadDTO[];
}

export interface UpdateProductDTO {
  name?: string;
  description?: string;
  price?: number;
  categoryIds?: string[];
}

export interface UpdateProductMediaDTO {
  keepMediaIds: string[];
  files: File[];
}

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
  categories?: Category[];
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

  media: Media[];

  user: {
    id: string;
    name: string;
    contactLink: string;
    profilePicture?: string;
    profileImageUrl?: string;
  };
}
