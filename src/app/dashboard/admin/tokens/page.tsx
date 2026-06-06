import AdminTokensContainer from '@/components/AdminTokens';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convites de Vendedores - MartinsVendas',
  description: 'Gere e gerencie os links de convite para onboarding de vendedores.',
};

export default function AdminTokensPage() {
  return <AdminTokensContainer />;
}
