'use client';

import { usePublicSellers } from '@/hooks/users/usePublicSellers';
import VendorsHeader from './VendorsHeader';
import VendorsGrid from './VendorsGrid';
import { FullScreenLoader } from '@/components/ui/FullScreenLoader';
import Footer from '@/components/Footer';
import styles from './PublicVendors.module.scss';

export default function PublicVendorsContainer() {
  const { data: vendors, isLoading, isError } = usePublicSellers();

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <>
      <div className={styles.container}>
        <VendorsHeader />
        {isError ? (
          <p className={styles.error}>Erro ao carregar vendedores.</p>
        ) : !vendors || vendors.length === 0 ? (
          <p className={styles.empty}>Nenhum vendedor encontrado.</p>
        ) : (
          <VendorsGrid vendors={vendors} />
        )}
      </div>
      <Footer />
    </>
  );
}
