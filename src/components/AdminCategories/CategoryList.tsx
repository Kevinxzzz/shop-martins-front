'use client';

import { Pencil, Trash2, Tag } from 'lucide-react';
import styles from './AdminCategories.module.scss';

import type { Category } from '@/types';

interface CategoryListProps {
  categories: Category[];
  onEdit: (cat: Category) => void;
  onDelete: (cat: Category) => void;
}

export default function CategoryList({
  categories,
  onEdit,
  onDelete,
}: CategoryListProps) {
  return (
    <div className={styles.categoriesList}>
      {/* Cabeçalho para Desktop */}
      <div className={styles.listHeader}>
        <div>Nome</div>
        <div>Slug</div>
        <div className={styles.alignRight}>Ações</div>
      </div>

      {/* Corpo da Lista */}
      <div className={styles.listBody}>
        {categories.length === 0 ? (
          <div className={styles.emptyList}>
            Nenhuma categoria encontrada.
          </div>
        ) : (
          categories.map(cat => (
            <div key={cat.id} className={styles.categoryRow}>
              {/* Coluna 1: Nome */}
              <div className={styles.nameCol}>
                <Tag size={16} className={styles.tagIcon} />
                <span className={styles.nameText}>{cat.name}</span>
              </div>

              {/* Coluna 2: Slug */}
              <div className={styles.slugCol}>
                <span className={styles.mobileLabel}>Slug</span>
                <span className={styles.slugText}>{cat.slug}</span>
              </div>

              {/* Coluna 3: Ações */}
              <div className={styles.actionsCol}>
                <button
                  className={styles.actionBtn}
                  onClick={() => onEdit(cat)}
                  title="Editar"
                >
                  <Pencil size={16} />
                </button>
                <button
                  className={`${styles.actionBtn} ${styles.danger}`}
                  onClick={() => onDelete(cat)}
                  title="Mover para lixeira"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
