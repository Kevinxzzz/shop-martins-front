import CadastroContainer from '@/components/Cadastro';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Criar Conta - MartinsVendas',
  description: 'Crie sua conta parceira e comece a vender no MartinsVendas.',
};

export default function RegisterPage() {
  return <CadastroContainer />;
}
