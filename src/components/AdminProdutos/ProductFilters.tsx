import { InputField } from '@/components/InputField';
import { Search, SlidersHorizontal } from 'lucide-react';
import styles from './AdminProdutos.module.scss';

interface ProductFiltersProps {
  searchTitle: string;
  setSearchTitle: (val: string) => void;
  activeFilterCount: number;
  onOpenFilters: () => void;
}

export function ProductFilters({
  searchTitle,
  setSearchTitle,
  activeFilterCount,
  onOpenFilters,
}: ProductFiltersProps) {
  return (
    <div className={styles.filtersContainer}>
      <div className={styles.searchWrapper}>
        <InputField
          id="searchTitle"
          label="Buscar por título"
          value={searchTitle}
          onChange={setSearchTitle}
          placeholder="Ex: Ney + Gullit..."
          icon={Search}
          fullWidth
        />
      </div>

      <button
        type="button"
        className={styles.filterBtn}
        onClick={onOpenFilters}
        aria-label="Abrir filtros"
      >
        <SlidersHorizontal size={16} />
        Filtros
        {activeFilterCount > 0 && (
          <span className={styles.filterBadge}>{activeFilterCount}</span>
        )}
      </button>
    </div>
  );
}
