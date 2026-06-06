import Link from 'next/link';
import Image from 'next/image';
import { Package, ArrowRight } from 'lucide-react';
import { getAvatarUrl } from '@/utils';
import type { PublicSeller } from '@/types';
import styles from './VendorCard.module.scss';

interface VendorCardProps {
  vendor: PublicSeller;
}

export default function VendorCard({ vendor }: VendorCardProps) {
  return (
    <Link href={`/vendedor/${vendor.id}`} className={styles.card}>
      <div className={styles.avatar}>
        <Image
          src={getAvatarUrl(vendor.imageUrl || '', vendor.name)}
          alt={vendor.name}
          width={80}
          height={80}
          unoptimized
        />
      </div>
      <h3 className={styles.name}>{vendor.name}</h3>
      <span className={styles.meta}>
        <Package size={14} aria-hidden="true" />
        {vendor.productsCount} {vendor.productsCount === 1 ? 'produto' : 'produtos'}
      </span>
      <span className={styles.button}>
        Ver loja <ArrowRight size={14} />
      </span>
    </Link>
  );
}
