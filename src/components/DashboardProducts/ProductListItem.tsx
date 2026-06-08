import Image from 'next/image';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import type { Product } from '@/types';
import { formatPrice } from '@/utils';
import styles from './styles.module.scss';

interface ProductListItemProps {
  product: Product;
  onView: (product: Product) => void;
  onEdit: (product: Product) => void;
  onDelete: (productId: string) => void;
}

export function ProductListItem({ product, onView, onEdit, onDelete }: ProductListItemProps) {
  const mainImage = product.media?.find(m => m.isMain && m.type === 'image')
    || product.media?.find(m => m.type === 'image')
    || product.media?.[0];
  const thumbnail = mainImage?.fileUrl || '/placeholder-product.svg';

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <div className={styles.viewsBadge} title="Visualizações">
          <Eye size={12} />
          {product.countViews || 0}
        </div>
        <Image
          src={thumbnail}
          alt={product.title || 'Imagem do produto'}
          fill
          unoptimized
        />
      </div>
      <div className={styles.details}>
        <div className={styles.content}>
          <h3 className={styles.productTitle} title={product.title}>
            {product.title}
          </h3>
          <div className={styles.price}>{formatPrice(product.price)}</div>
        </div>

        <div className={styles.actions}>
          <div className={styles.actionGroup}>
            <button
              className={styles.actionBtn}
              onClick={() => onView(product)}
              title="Ver na loja"
              aria-label="Ver na loja"
            >
              <Eye size={18} />
            </button>
            <button
              className={styles.actionBtn}
              onClick={() => onEdit(product)}
              title="Editar"
              aria-label="Editar produto"
            >
              <Pencil size={18} />
            </button>
          </div>
          <button
            className={`${styles.actionBtn} ${styles.danger}`}
            onClick={() => onDelete(product.id)}
            title="Excluir produto"
            aria-label="Excluir produto"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}
