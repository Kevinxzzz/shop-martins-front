import AdminCategoriesContainer from '@/components/AdminCategories';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gerenciar Categorias - BlueFoot',
  description: 'Gerencie as categorias de produtos da sua loja.',
};

export default function AdminCategoriesPage() {
  return <AdminCategoriesContainer />;
}
