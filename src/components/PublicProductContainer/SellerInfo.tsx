'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/types';
import styles from './PublicProductContainer.module.scss';

interface SellerInfoProps {
  seller: Product['seller'];
}

export function SellerInfo({ seller }: SellerInfoProps) {
  if (!seller) return null;

  return (
    <div className={styles.vendorBlock}>
      <h4 className={styles.vendorTitle}>Vendedor</h4>
      <Link href={`/vendedor/${seller.id}`} className={styles.vendorInfo}>
        <Image
          src={seller.profilePicture || '/placeholder-avatar.png'}
          alt={seller.name}
          width={48}
          height={48}
          className={styles.vendorAvatar}
          unoptimized
        />
        <div>
          <span className={styles.vendorName}>{seller.name}</span>
          <span className={styles.vendorSub}>Ver todos os produtos</span>
        </div>
      </Link>
    </div>
  );
}
