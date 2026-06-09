import PublicVendorsContainer from '@/components/PublicVendors';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nossos Vendedores - BlueFoot',
  description: 'Conheça os vendedores da plataforma e explore seus produtos exclusivos.',
};

export default function VendorsPage() {
  return <PublicVendorsContainer />;
}
