import DashboardProductsContainer from '@/components/DashboardProducts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meus Produtos - BlueFoot',
  description: 'Gerencie seus produtos no BlueFoot.',
};

export default function DashboardProductsPage() {
  return <DashboardProductsContainer />;
}
