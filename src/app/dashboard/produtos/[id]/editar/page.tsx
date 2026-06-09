import EditProductContainer from '@/components/EditProduct';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editar Produto - BlueFoot',
  description: 'Altere as informações, categorias e mídias do seu produto.',
};

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  // Em Next.js 15, o params pode ser uma promise em Server Components.
  // Aguardamos ou usamos React.use() conforme a nova API, ou recebemos direto conforme versão
  // Como o Next é 16.2.6 (provavelmente App Router), acessaremos aguardando se necessário ou diretamente se a api for estável.
  // Usaremos um await seguro para params, pois é a documentação atual do App Router.
  const resolvedParams = await params;
  return <EditProductContainer productId={resolvedParams.id} />;
}
