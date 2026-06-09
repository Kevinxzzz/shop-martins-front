import NovoProdutoContainer from '@/components/NovoProduto';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Novo Produto - BlueFoot',
  description: 'Cadastre um novo produto na plataforma.',
};

export default function NewProductPage() {
  return <NovoProdutoContainer />;
}


