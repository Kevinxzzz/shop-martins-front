'use client';

import { useState, useEffect } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { getCategories } from '@/mock/api';
import type { Categoria } from '@/types';
import styles from './FilterSidebar.module.scss';

interface FilterSidebarProps {
  selectedCategoria?: string;
  precoMin?: number;
  precoMax?: number;
  onFilter: (filters: { categoria?: string; precoMin?: number; precoMax?: number }) => void;
}

export default function FilterSidebar({
  selectedCategoria,
  precoMin = 0,
  precoMax = 2000,
  onFilter,
}: FilterSidebarProps) {
  const [categories, setCategories] = useState<Categoria[]>([]);
  const [cat, setCat] = useState(selectedCategoria || '');
  const [min, setMin] = useState(precoMin);
  const [max, setMax] = useState(precoMax);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  useEffect(() => {
    setCat(selectedCategoria || '');
  }, [selectedCategoria]);

  const apply = () => {
    onFilter({
      categoria: cat || undefined,
      precoMin: min > 0 ? min : undefined,
      precoMax: max < 2000 ? max : undefined,
    });
    setMobileOpen(false);
  };

  const clear = () => {
    setCat('');
    setMin(0);
    setMax(2000);
    onFilter({});
    setMobileOpen(false);
  };

  const filterContent = (
    <div className={styles.content}>
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Categoria</h4>
        <div className={styles.options}>
          <button
            className={`${styles.option} ${cat === '' ? styles.active : ''}`}
            onClick={() => setCat('')}
          >
            Todas
          </button>
          {categories.map(c => (
            <button
              key={c.id}
              className={`${styles.option} ${cat === c.id ? styles.active : ''}`}
              onClick={() => setCat(c.id)}
            >
              {c.nome}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Faixa de Preço</h4>
        <div className={styles.priceInputs}>
          <div className={styles.priceField}>
            <label htmlFor="priceMin">Mín</label>
            <input
              id="priceMin"
              type="number"
              className={styles.priceInput}
              value={min}
              onChange={e => setMin(Number(e.target.value))}
              min={0}
              step={10}
            />
          </div>
          <span className={styles.priceSep}>—</span>
          <div className={styles.priceField}>
            <label htmlFor="priceMax">Máx</label>
            <input
              id="priceMax"
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

      <div className={styles.actions}>
        <button className={styles.applyBtn} onClick={apply}>Aplicar filtros</button>
        <button className={styles.clearBtn} onClick={clear}>Limpar</button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className={styles.sidebar} aria-label="Filtros">
        <div className={styles.header}>
          <SlidersHorizontal size={18} />
          <h3 className={styles.title}>Filtros</h3>
        </div>
        {filterContent}
      </aside>

      {/* Mobile trigger */}
      <button className={styles.mobileTrigger} onClick={() => setMobileOpen(true)}>
        <SlidersHorizontal size={16} />
        Filtros
      </button>

      {/* Mobile drawer */}
      {mobileOpen && (
        <>
          <div className={styles.overlay} onClick={() => setMobileOpen(false)} />
          <div className={styles.drawer} role="dialog" aria-label="Filtros">
            <div className={styles.drawerHeader}>
              <h3 className={styles.title}>Filtros</h3>
              <button className={styles.drawerClose} onClick={() => setMobileOpen(false)}>
                <X size={20} />
              </button>
            </div>
            {filterContent}
          </div>
        </>
      )}
    </>
  );
}
