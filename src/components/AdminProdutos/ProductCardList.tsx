import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, User, Trash2, ChevronDown } from 'lucide-react';
import { formatPrice } from '@/utils';
import type { Product, Category } from '@/types';
import styles from './AdminProdutos.module.scss';
import sharedStyles from '../../app/dashboard/shared.module.scss';

function CategoryCellDropdown({ categories, defaultCategory }: { categories?: Category[]; defaultCategory?: Category }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const list = categories || (defaultCategory ? [defaultCategory] : []);

  if (list.length === 0) {
    return <span className={sharedStyles.badge}>Sem categoria</span>;
  }

  if (list.length === 1) {
    return <span className={sharedStyles.badge}>{list[0].name}</span>;
  }

  return (
    <div className={sharedStyles.dropdownContainer} ref={containerRef}>
      <button
        type="button"
        className={sharedStyles.dropdownTrigger}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        {list[0].name} (+{list.length - 1})
        <ChevronDown size={12} className={`${sharedStyles.arrow} ${isOpen ? sharedStyles.open : ''}`} />
      </button>

      {isOpen && (
        <ul className={sharedStyles.dropdownMenu} role="menu">
          {list.map((c) => (
            <li key={c.id} className={sharedStyles.dropdownItem} role="menuitem">
              {c.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

interface ProductCardListProps {
  products: Product[];
  onDelete: (id: string) => void;
}

export function ProductCardList({ products, onDelete }: ProductCardListProps) {
  if (products.length === 0) {
    return (
      <div className={styles.noResults}>
        Nenhum produto correspondente aos filtros.
      </div>
    );
  }

  return (
    <div className={styles.cardList}>
      {products.map(p => {
        const mainImage = p.media?.find(m => m.isMain && m.type === 'image')
          || p.media?.find(m => m.type === 'image')
          || p.media?.[0];
        return (
          <div key={p.id} className={styles.productCard}>
            <div className={styles.cardHeader}>
              <Image
                src={mainImage?.fileUrl || '/placeholder-product.svg'}
                alt={p.title}
                width={48}
                height={48}
                className={styles.cardThumb}
                unoptimized
              />
              <div className={styles.cardMainInfo}>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <div>
                  <CategoryCellDropdown categories={p.categories} defaultCategory={p.category} />
                </div>
              </div>
            </div>

            <div className={styles.cardBody}>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>
                  <User size={12} style={{ marginRight: '4px' }} /> Vendedor:
                </span>
                <span className={styles.metaValue}>{p.seller?.name || 'Não informado'}</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaLabel}>Views:</span>
                <span className={styles.metaValue}>{p.countViews}</span>
              </div>
              <div className={styles.priceRow}>
                <span className={sharedStyles.price}>{formatPrice(p.price)}</span>
                <div className={sharedStyles.actionBtns}>
                  <Link href={`/produto/${p.id}`} className={sharedStyles.actionBtn} title="Visualizar">
                    <Eye size={16} />
                  </Link>
                  <button
                    type="button"
                    className={`${sharedStyles.actionBtn} ${sharedStyles.danger}`}
                    onClick={() => onDelete(p.id)}
                    title="Excluir produto"
                    aria-label="Excluir produto"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
