export interface Media {
  id: string;
  fileUrl: string;
  type: 'image' | 'video';
  order: number;
  productId: string;
}
