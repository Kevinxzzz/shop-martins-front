'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { PublicProductDetail } from '@/types/productType';
import styles from './PublicProductContainer.module.scss';

interface SellerInfoProps {
  seller: PublicProductDetail['user'];
}

export function SellerInfo({ seller }: SellerInfoProps) {
  if (!seller) return null;

  const avatarUrl = seller.profilePicture || seller.profileImageUrl || `https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(seller.name)}`;

  return (
    <div className={styles.vendorBlock}>
      <h4 className={styles.vendorTitle}>Vendedor</h4>
      <Link href={`/vendedor/${seller.id}`} className={styles.vendorInfo}>
        <Image
          src={avatarUrl}
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
