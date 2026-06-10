import CadastroEmpresaContainer from '@/components/CadastroEmpresa';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cadastrar Empresa - BlueFoot',
  description: 'Cadastre a sua empresa e crie o administrador principal da conta no BlueFoot.',
};

export default function EnterpriseRegisterPage() {
  return <CadastroEmpresaContainer />;
}
