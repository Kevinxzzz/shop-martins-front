'use client';

import { Eye, MessageCircle } from 'lucide-react';
import { formatPrice, formatViews, ensureExternalLink } from '@/utils';
import type { PublicProductDetail } from '@/types/productType';
import styles from './PublicProductContainer.module.scss';

interface ProductDetailsProps {
  product: PublicProductDetail;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className={styles.detailsColumn}>
      <div className={styles.categoriesContainer}>
        {product.categories &&
          product.categories.map((c) => (
            <span key={c.category.id} className={styles.categoryBadge}>
              {c.category.name}
            </span>
          ))}
      </div>

      <h1 className={styles.title}>{product.name}</h1>

      <div className={styles.viewCount}>
        <Eye size={16} aria-hidden="true" />
        <span>{formatViews(product.countViews || 0)} visualizações</span>
      </div>

      <div className={styles.priceBlock}>
        <span className={styles.price}>{formatPrice(product.price)}</span>
        <span className={styles.priceNote}>à vista com o vendedor</span>
      </div>

      {product.user?.contactLink ? (
        <a
          href={ensureExternalLink(product.user.contactLink)}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactBtn}
          aria-label="Entrar em contato com o vendedor"
        >
          <MessageCircle size={22} />
          Entrar em Contato
        </a>
      ) : (
        <button
          className={`${styles.contactBtn} ${styles.disabled}`}
          disabled
          aria-label="Contato do vendedor não disponível"
        >
          <MessageCircle size={22} />
          Entrar em Contato
        </button>
      )}

      <div className={styles.description}>
        <h3>Descrição</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
