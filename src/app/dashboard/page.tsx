import DashboardProductsContainer from '@/components/DashboardProducts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - MartinsVendas',
  description: 'Visão geral e produtos do seu dashboard.',
};

export default function DashboardPage() {
  return <DashboardProductsContainer />;
}
