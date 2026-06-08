export interface Media {
  id: string;
  fileUrl: string;
  type: 'image' | 'video';
  isMain?: boolean;
  order: number;
  productId: string;
}
