import Link from 'next/link';
import Image from 'next/image';
import { Eye } from 'lucide-react';
import { formatPrice, formatViews } from '@/utils';
import type { Produto } from '@/types';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Produto;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const mainImage = product.midias.find(m => m.tipo === 'imagem');

  return (
    <Link
      href={`/produto/${product.id}`}
      className={styles.card}
      style={{ animationDelay: `${index * 60}ms` }}
      aria-label={`Ver ${product.titulo} por ${formatPrice(product.preco)}`}
    >
      <div className={styles.imageWrapper}>
        {mainImage && (
          <Image
            src={mainImage.url_arquivo}
            alt={product.titulo}
            width={400}
            height={400}
            loading={index < 4 ? 'eager' : 'lazy'}
            unoptimized
          />
        )}
        {product.categoria && (
          <span className={styles.badge}>{product.categoria.nome}</span>
        )}
        <span className={styles.views}>
          <Eye size={12} aria-hidden="true" />
          {formatViews(product.countViews)}
        </span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{product.titulo}</h3>

        <div className={styles.priceRow}>
          <span className={styles.price}>{formatPrice(product.preco)}</span>
        </div>

        {product.vendedor && (
          <div className={styles.vendor}>
            <Image
              src={product.vendedor.foto_perfil}
              alt={product.vendedor.nome}
              width={24}
              height={24}
              className={styles.vendorAvatar}
              unoptimized
            />
            <span className={styles.vendorName}>{product.vendedor.nome}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
