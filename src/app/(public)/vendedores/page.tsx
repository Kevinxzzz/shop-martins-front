'use client';

import { useEffect, useState } from 'react';
import { Users } from 'lucide-react';
import VendorCard from '@/components/VendorCard';
import { getVendors } from '@/mock/api';
import type { Usuario } from '@/types';
import styles from './page.module.scss';

export default function VendorsPage() {
  const [vendors, setVendors] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVendors().then(v => {
      setVendors(v);
      setLoading(false);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerIcon}>
          <Users size={24} />
        </div>
        <h1 className={styles.title}>Nossos <span>Vendedores</span></h1>
        <p className={styles.subtitle}>
          Conheça os vendedores da plataforma e explore seus produtos exclusivos.
        </p>
      </div>

      {loading ? (
        <div className={styles.grid}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={styles.skeletonCard} />
          ))}
        </div>
      ) : (
        <div className={styles.grid}>
          {vendors.map(vendor => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
      )}
    </div>
  );
}
