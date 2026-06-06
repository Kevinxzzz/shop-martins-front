export interface MediaUploadDTO {
  url: string;
  key: string;
  type: 'FOTO' | 'VIDEO';
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
