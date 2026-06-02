export interface UploadResponse {
  url: string;
}

export interface MediaUploadResponse {
  url: string;
  key: string;
  type: 'FOTO' | 'VIDEO';
}
