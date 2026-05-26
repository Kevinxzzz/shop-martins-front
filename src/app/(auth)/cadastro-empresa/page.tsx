import CadastroEmpresaContainer from '@/components/CadastroEmpresa';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cadastrar Empresa - MartinsVendas',
  description: 'Cadastre a sua empresa e crie o administrador principal da conta no MartinsVendas.',
};

export default function EnterpriseRegisterPage() {
  return <CadastroEmpresaContainer />;
}
