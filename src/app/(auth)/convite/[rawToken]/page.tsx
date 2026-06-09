import CadastroContainer from '@/components/Cadastro';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convite - BlueFoot',
  description: 'Aceite seu convite e cadastre-se no BlueFoot.',
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
