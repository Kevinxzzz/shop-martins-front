import CadastroContainer from '@/components/Cadastro';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Criar Conta - BlueFoot',
  description: 'Crie sua conta parceira e comece a vender no BlueFoot.',
};

export default function RegisterPage() {
  return <CadastroContainer />;
}
