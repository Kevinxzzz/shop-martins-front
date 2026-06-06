import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, Trash2, ChevronDown } from 'lucide-react';
import { formatPrice } from '@/utils';
import type { Product, Category } from '@/types';
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

interface ProductTableProps {
  products: Product[];
  onDelete: (id: string) => void;
}

export function ProductTable({ products, onDelete }: ProductTableProps) {
  if (products.length === 0) {
    return (
      <div style={{ padding: '24px', textAlign: 'center', color: 'var(--color-text-secondary)', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-lg)' }}>
        Nenhum produto correspondente aos filtros.
      </div>
    );
  }

  return (
    <div className={sharedStyles.tableWrapper}>
      <table className={sharedStyles.table}>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Vendedor</th>
            <th>Categoria</th>
            <th>Preço</th>
            <th>Views</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>
                <div className={sharedStyles.productRow}>
                  <Image
                    src={p.media?.[0]?.fileUrl || '/placeholder-product.svg'}
                    alt={p.title}
                    width={36}
                    height={36}
                    className={sharedStyles.productThumb}
                    unoptimized
                  />
                  <span className={sharedStyles.productTitle}>{p.title}</span>
                </div>
              </td>
              <td>{p.seller?.name}</td>
              <td>
                <CategoryCellDropdown categories={p.categories} defaultCategory={p.category} />
              </td>
              <td>
                <span className={sharedStyles.price}>{formatPrice(p.price)}</span>
              </td>
              <td>{p.countViews}</td>
              <td>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
