import PerfilContainer from '@/components/Perfil';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meu Perfil - MartinsVendas',
  description: 'Gerencie suas informações pessoais e de contato.',
};

export default function ProfilePage() {
  return <PerfilContainer />;
}
