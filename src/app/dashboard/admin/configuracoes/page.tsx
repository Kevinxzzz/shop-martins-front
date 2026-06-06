import AdminConfiguracoesContainer from '@/components/AdminConfiguracoes';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Configurações - MartinsVendas',
  description: 'Gerencie os dados cadastrais da empresa e o canal de vendas principal.',
};

export default function AdminConfigPage() {
  return <AdminConfiguracoesContainer />;
}

