import AdminProdutosContainer from '@/components/AdminProdutos';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Produtos - MartinsVendas',
  description: 'Gerencie todos os produtos cadastrados no painel administrativo.',
};

export default function AdminProductsPage() {
  return <AdminProdutosContainer />;
}
