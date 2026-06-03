import DashboardProductsContainer from '@/components/DashboardProducts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meus Produtos - MartinsVendas',
  description: 'Gerencie seus produtos no MartinsVendas.',
};

export default function DashboardProductsPage() {
  return <DashboardProductsContainer />;
}
