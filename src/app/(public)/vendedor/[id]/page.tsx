import VendorStoreContainer from '@/components/VendorStore';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Loja do Vendedor - BlueFoot',
  description: 'Conheça os produtos deste vendedor no BlueFoot.',
};

export default async function VendorStorePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <VendorStoreContainer vendorId={id} />;
}
