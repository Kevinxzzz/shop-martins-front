import Link from 'next/link';
import Image from 'next/image';
import { Package, ArrowRight } from 'lucide-react';
import { produtos } from '@/mock/data';
import type { Usuario } from '@/types';
import styles from './VendorCard.module.scss';

interface VendorCardProps {
  vendor: Usuario;
}

export default function VendorCard({ vendor }: VendorCardProps) {
  const productCount = produtos.filter(p => p.vendedor_id === vendor.id).length;

  return (
    <Link href={`/vendedor/${vendor.id}`} className={styles.card}>
      <div className={styles.avatar}>
        <Image
          src={vendor.foto_perfil}
          alt={vendor.nome}
          width={80}
          height={80}
          unoptimized
        />
      </div>
      <h3 className={styles.name}>{vendor.nome}</h3>
      <span className={styles.meta}>
        <Package size={14} aria-hidden="true" />
        {productCount} produtos
      </span>
      <span className={styles.button}>
        Ver loja <ArrowRight size={14} />
      </span>
    </Link>
  );
}
