import PublicProductContainer from '@/components/PublicProductContainer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Detalhes do Produto - BlueFoot',
  description: 'Veja todos os detalhes, fotos e preço deste produto.',
};

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  // Em Next.js 15, params pode ser assíncrono. Em 16.2 também requer await se configurado,
  // Seguindo a mesma lógica da edição de produto para evitar warnings.
  const resolvedParams = await params;
  return <PublicProductContainer productId={resolvedParams.id} />;
}
