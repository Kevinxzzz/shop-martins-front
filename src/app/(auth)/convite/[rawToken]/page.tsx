import CadastroContainer from '@/components/Cadastro';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convite - MartinsVendas',
  description: 'Aceite seu convite e cadastre-se no MartinsVendas.',
};

type ConvitePageProps = {
  params: Promise<{
    rawToken: string;
  }>;
};

export default async function ConvitePage({ params }: ConvitePageProps) {
  const { rawToken } = await params;
  return <CadastroContainer token={rawToken} />;
}
