'use client';

import { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { getCategories } from '@/mock/api';
import type { Category } from '@/types';
import styles from './FilterModal.module.scss';
import { formatCurrencyInput, parseCurrencyToCents } from '@/utils';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory?: string | string[];
  selectedSeller?: string | string[];
  minPrice?: number;
  maxPrice?: number;
  onFilter: (filters: { category?: string[]; seller?: string[]; minPrice?: number; maxPrice?: number }) => void;
  categories?: { id: string; name: string }[];
  sellers?: { id: string; name: string }[];
  showSellerFilter?: boolean;
  showPriceFilter?: boolean;
}

export default function FilterModal({
  isOpen,
  onClose,
  selectedCategory,
  selectedSeller,
  minPrice,
  maxPrice,
  onFilter,
  categories: categoriesProp,
  sellers = [],
  showSellerFilter = false,
  showPriceFilter = true,
}: FilterModalProps) {
  const [internalCategories, setInternalCategories] = useState<Category[]>([]);
  
  const initArr = (val: string | string[] | undefined) => Array.isArray(val) ? val : val ? [val] : [];
  
  const [cat, setCat] = useState<string[]>(initArr(selectedCategory));
  const [seller, setSeller] = useState<string[]>(initArr(selectedSeller));
  const [min, setMin] = useState<string>(minPrice ? formatCurrencyInput(minPrice) : '');
  const [max, setMax] = useState<string>(maxPrice ? formatCurrencyInput(maxPrice) : '');

  useEffect(() => {
    if (!categoriesProp) {
      getCategories().then(setInternalCategories);
    }
  }, [categoriesProp]);

  const displayedCategories = categoriesProp || internalCategories;

  useEffect(() => {
    if (isOpen) {
      setCat(initArr(selectedCategory));
      setSeller(initArr(selectedSeller));
      setMin(minPrice ? formatCurrencyInput(minPrice) : '');
      setMax(maxPrice ? formatCurrencyInput(maxPrice) : '');
    }
  }, [isOpen, selectedCategory, selectedSeller, minPrice, maxPrice]);

  const apply = () => {
    onFilter({
      category: cat.length > 0 ? cat : undefined,
      seller: seller.length > 0 ? seller : undefined,
      minPrice: min ? parseCurrencyToCents(min) : undefined,
      maxPrice: max ? parseCurrencyToCents(max) : undefined,
    });
  };

  const clear = () => {
    setCat([]);
    setSeller([]);
    setMin('');
    setMax('');
    onFilter({});
  };

  const toggleCat = (id: string) => {
    if (!id) setCat([]);
    else setCat(prev => prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]);
  };

  const toggleSeller = (id: string) => {
    if (!id) setSeller([]);
    else setSeller(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);
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
            <h4 className={styles.sectionTitle}>Categorias</h4>
            <div className={styles.chipGrid}>
              <button
                className={`${styles.chip} ${cat.length === 0 ? styles.active : ''}`}
                onClick={() => toggleCat('')}
              >
                {cat.length === 0 && <Check size={12} />}
                Todas
              </button>
              {displayedCategories.map(c => (
                <button
                  key={c.id}
                  className={`${styles.chip} ${cat.includes(c.id) ? styles.active : ''}`}
                  onClick={() => toggleCat(c.id)}
                >
                  {cat.includes(c.id) && <Check size={12} />}
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Sellers */}
          {showSellerFilter && sellers.length > 0 && (
            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>Vendedores</h4>
              <div className={styles.chipGrid}>
                <button
                  className={`${styles.chip} ${seller.length === 0 ? styles.active : ''}`}
                  onClick={() => toggleSeller('')}
                >
                  {seller.length === 0 && <Check size={12} />}
                  Todos
                </button>
                {sellers.map(s => (
                  <button
                    key={s.id}
                    className={`${styles.chip} ${seller.includes(s.id) ? styles.active : ''}`}
                    onClick={() => toggleSeller(s.id)}
                  >
                    {seller.includes(s.id) && <Check size={12} />}
                    {s.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Price Range */}
          {showPriceFilter && (
            <div className={styles.section}>
              <h4 className={styles.sectionTitle}>Faixa de Preço</h4>
              <div className={styles.priceRow}>
                <div className={styles.priceField}>
                  <label htmlFor="filterMin">Mínimo</label>
                  <div className={styles.priceInputWrapper}>
                    <span className={styles.pricePrefix}>R$</span>
                    <input
                      id="filterMin"
                      type="text"
                      className={styles.priceInput}
                      value={min}
                      onChange={e => setMin(formatCurrencyInput(e.target.value))}
                      placeholder="0,00"
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
                      type="text"
                      className={styles.priceInput}
                      value={max}
                      onChange={e => setMax(formatCurrencyInput(e.target.value))}
                      placeholder="Sem limite"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={styles.footer}>
          <button className={styles.clearBtn} onClick={clear}>Limpar tudo</button>
          <button className={styles.applyBtn} onClick={apply}>Aplicar filtros</button>
        </div>
      </div>
    </>
  );
}
