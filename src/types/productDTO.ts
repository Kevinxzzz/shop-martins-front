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
