'use client';

import { usePublicSellers } from '@/hooks/users/usePublicSellers';
import VendorsHeader from './VendorsHeader';
import VendorsSkeleton from './VendorsSkeleton';
import VendorsGrid from './VendorsGrid';
import styles from './PublicVendors.module.scss';

export default function PublicVendorsContainer() {
  const { data: vendors, isLoading, isError } = usePublicSellers();

  return (
    <div className={styles.container}>
      <VendorsHeader />
      {isLoading ? (
        <VendorsSkeleton count={6} />
      ) : isError ? (
        <p className={styles.error}>Erro ao carregar vendedores.</p>
      ) : !vendors || vendors.length === 0 ? (
        <p className={styles.empty}>Nenhum vendedor encontrado.</p>
      ) : (
        <VendorsGrid vendors={vendors} />
      )}
    </div>
  );
}
