import Image from 'next/image';
import Link from 'next/link';
import { Eye, Pencil, Trash2, Eye as EyeIcon } from 'lucide-react';
import type { Product } from '@/types';
import { formatPrice } from '@/utils';
import styles from './styles.module.scss';

interface ProductListItemProps {
  product: Product;
  onDelete: (id: string) => void;
}

export function ProductListItem({ product, onDelete }: ProductListItemProps) {
  const thumbnail = product.media?.[0]?.fileUrl || '/placeholder-product.png';

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <div className={styles.viewsBadge} title="Visualizações">
          <EyeIcon size={12} />
          {product.countViews || 0}
        </div>
        <Image
          src={thumbnail}
          alt={product.title}
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
            <Link href={`/produto/${product.id}`} className={styles.actionBtn} title="Ver na loja">
              <Eye size={18} />
            </Link>
            <Link href={`/dashboard/produtos/${product.id}/editar`} className={styles.actionBtn} title="Editar">
              <Pencil size={18} />
            </Link>
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
