'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { usePublicUserDetail } from '@/hooks/users/usePublicUserDetail';
import VendorBanner from './VendorBanner';
import VendorProducts from './VendorProducts';
import VendorSkeleton from './VendorSkeleton';
import styles from './VendorStore.module.scss';

interface VendorStoreContainerProps {
  vendorId: string;
}

export default function VendorStoreContainer({ vendorId }: VendorStoreContainerProps) {
  const { data: vendor, isLoading, isError, error } = usePublicUserDetail(vendorId);

  if (isLoading) {
    return <VendorSkeleton />;
  }

  if (isError || !vendor) {
    return (
      <div className={styles.container}>
        <div className={styles.empty}>
          <h2>Vendedor não encontrado</h2>
          <Link href="/vendedores" className={styles.backBtn}>
            <ArrowLeft size={16} aria-hidden="true" />
            Voltar
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <VendorBanner vendor={vendor} productsCount={vendor.products.length} />
      <VendorProducts vendorName={vendor.name} products={vendor.products} />
    </div>
  );
}
