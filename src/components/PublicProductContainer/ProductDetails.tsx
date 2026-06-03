'use client';

import { Eye, MessageCircle } from 'lucide-react';
import { formatPrice, formatViews, getWhatsAppLink } from '@/utils';
import type { Product } from '@/types';
import styles from './PublicProductContainer.module.scss';

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const whatsappMessage = `Olá! Vi o produto "${product.title}" por ${formatPrice(product.price)} no Shop Martins e gostaria de mais informações.`;
  const whatsappLink = getWhatsAppLink(product.seller?.whatsappPhone || '', whatsappMessage);

  return (
    <div className={styles.detailsColumn}>
      {/* Adaptação para múltiplas categorias (ou a única suportada atualmente) */}
      <div className={styles.categoriesContainer}>
        {product.category && (
          <span className={styles.categoryBadge}>{product.category.name}</span>
        )}
      </div>

      <h1 className={styles.title}>{product.title}</h1>

      <div className={styles.viewCount}>
        <Eye size={16} aria-hidden="true" />
        <span>{formatViews(product.countViews || 0)} visualizações</span>
      </div>

      <div className={styles.priceBlock}>
        <span className={styles.price}>{formatPrice(product.price)}</span>
        <span className={styles.priceNote}>à vista via WhatsApp</span>
      </div>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappBtn}
        aria-label="Chamar vendedor no WhatsApp"
      >
        <MessageCircle size={22} />
        Chamar no WhatsApp
      </a>

      <div className={styles.description}>
        <h3>Descrição</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
