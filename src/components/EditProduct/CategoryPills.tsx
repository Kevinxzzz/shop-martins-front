'use client';

import type { Category } from '@/types';
import styles from './EditProduct.module.scss';

interface CategoryPillsProps {
  categories: Category[];
  selectedIds: string[];
  onChange: (ids: string[]) => void;
  disabled?: boolean;
}

export function CategoryPills({ categories, selectedIds, onChange, disabled = false }: CategoryPillsProps) {
  const toggleCategory = (id: string) => {
    if (disabled) return;
    if (selectedIds.includes(id)) {
      onChange(selectedIds.filter(selectedId => selectedId !== id));
    } else {
      onChange([...selectedIds, id]);
    }
  };

  if (categories.length === 0) {
    return <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem' }}>Nenhuma categoria disponível</span>;
  }

  return (
    <div className={styles.categoryPillsContainer} role="group" aria-label="Seleção de categorias">
      {categories.map(category => {
        const isSelected = selectedIds.includes(category.id);
        return (
          <button
            key={category.id}
            type="button"
            className={`${styles.pill} ${isSelected ? styles.selected : ''}`}
            onClick={() => toggleCategory(category.id)}
            disabled={disabled}
            aria-pressed={isSelected}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
