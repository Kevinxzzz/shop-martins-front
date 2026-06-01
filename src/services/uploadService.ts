import { httpClient } from './httpClient';

type UploadResponse = {
  url: string;
};

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
};
