'use client';

import { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { getCategories } from '@/mock/api';
import type { Category } from '@/types';
import styles from './FilterModal.module.scss';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory?: string;
  minPrice?: number;
  maxPrice?: number;
  onFilter: (filters: { category?: string; minPrice?: number; maxPrice?: number }) => void;
}

export default function FilterModal({
  isOpen,
  onClose,
  selectedCategory,
  minPrice = 0,
  maxPrice = 2000,
  onFilter,
}: FilterModalProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [cat, setCat] = useState(selectedCategory || '');
  const [min, setMin] = useState(minPrice);
  const [max, setMax] = useState(maxPrice);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setCat(selectedCategory || '');
      setMin(minPrice);
      setMax(maxPrice);
    }
  }, [isOpen, selectedCategory, minPrice, maxPrice]);

  const apply = () => {
    onFilter({
      category: cat || undefined,
      minPrice: min > 0 ? min : undefined,
      maxPrice: max < 2000 ? max : undefined,
    });
  };

  const clear = () => {
    setCat('');
    setMin(0);
    setMax(2000);
    onFilter({});
  };

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose} aria-hidden="true" />
      <div className={styles.modal} role="dialog" aria-modal="true" aria-label="Filtros de produtos">
        <div className={styles.header}>
          <h3 className={styles.title}>Filtros</h3>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Fechar filtros">
            <X size={18} />
          </button>
        </div>

        <div className={styles.body}>
          {/* Categories */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Categoria</h4>
            <div className={styles.chipGrid}>
              <button
                className={`${styles.chip} ${cat === '' ? styles.active : ''}`}
                onClick={() => setCat('')}
              >
                {cat === '' && <Check size={12} />}
                Todas
              </button>
              {categories.map(c => (
                <button
                  key={c.id}
                  className={`${styles.chip} ${cat === c.id ? styles.active : ''}`}
                  onClick={() => setCat(c.id)}
                >
                  {cat === c.id && <Check size={12} />}
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Faixa de Preço</h4>
            <div className={styles.priceRow}>
              <div className={styles.priceField}>
                <label htmlFor="filterMin">Mínimo</label>
                <div className={styles.priceInputWrapper}>
                  <span className={styles.pricePrefix}>R$</span>
                  <input
                    id="filterMin"
                    type="number"
                    className={styles.priceInput}
                    value={min}
                    onChange={e => setMin(Number(e.target.value))}
                    min={0}
                    step={10}
                  />
                </div>
              </div>
              <span className={styles.priceDivider} />
              <div className={styles.priceField}>
                <label htmlFor="filterMax">Máximo</label>
                <div className={styles.priceInputWrapper}>
                  <span className={styles.pricePrefix}>R$</span>
                  <input
                    id="filterMax"
                    type="number"
                    className={styles.priceInput}
                    value={max}
                    onChange={e => setMax(Number(e.target.value))}
                    min={0}
                    step={10}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <button className={styles.clearBtn} onClick={clear}>Limpar tudo</button>
          <button className={styles.applyBtn} onClick={apply}>Aplicar filtros</button>
        </div>
      </div>
    </>
  );
}
