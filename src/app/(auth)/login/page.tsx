import LoginContainer from '@/components/Login';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - MartinsVendas',
  description: 'Acesse sua conta para gerenciar seus produtos e vendas.',
};

export default function LoginPage() {
  return <LoginContainer />;
}
