import { httpClient } from './httpClient';
import type { UploadResponse, MediaUploadResponse } from '@/types/uploadType';

export const uploadService = {
  async uploadImage(file: File): Promise<UploadResponse> {
    const formData = new FormData();
    formData.append('file', file);

    const response = await httpClient.post<UploadResponse>('/upload/image-profile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      timeout: 60000,
    });

    return response.data;
  },

  async uploadProductMedia(files: File[]): Promise<MediaUploadResponse[]> {
    const formData = new FormData();
    files.forEach(file => {
      formData.append('files', file);
    });

    const response = await httpClient.post<MediaUploadResponse[]>('/upload/product-media', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      timeout: 60000, // Timeout maior pois pode conter vídeo
    });

    return response.data;
  }
};
