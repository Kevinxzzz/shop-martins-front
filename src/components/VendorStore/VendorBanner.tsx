import Image from 'next/image';
import { MessageCircle, Package } from 'lucide-react';
import { getWhatsAppLink, getAvatarUrl } from '@/utils';
import type { PublicVendorDetail } from '@/types';
import styles from './VendorStore.module.scss';

interface VendorBannerProps {
  vendor: PublicVendorDetail;
  productsCount: number;
}

export default function VendorBanner({ vendor, productsCount }: VendorBannerProps) {
  const whatsappLink = vendor.contactLink || getWhatsAppLink(
    '', // Sem telefone fixo
    `Olá ${vendor.name}! Vi sua loja no Shop Martins e gostaria de conversar.`
  );

  return (
    <div className={styles.banner}>
      <div className={styles.bannerBg} />
      <div className={styles.bannerContent}>
        <Image
          src={getAvatarUrl(vendor.profileImageUrl || '', vendor.name)}
          alt={vendor.name}
          width={112}
          height={112}
          className={styles.avatar}
          unoptimized
        />
        <div className={styles.bannerInfo}>
          <h1 className={styles.vendorName}>{vendor.name}</h1>
          <span className={styles.vendorMeta}>
            <Package size={16} aria-hidden="true" />
            {productsCount} {productsCount === 1 ? 'produto' : 'produtos'}
          </span>
        </div>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactBtn}
        >
          <MessageCircle size={18} aria-hidden="true" />
          Entre em contato
        </a>
      </div>
    </div>
  );
}
