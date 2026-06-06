'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useAdminProducts } from '@/hooks/products/useAdminProducts';
import { useCategories } from '@/hooks/categories/useCategories';
import { useUsers } from '@/hooks/users/useUsers';
import { useDeleteProduct } from '@/hooks/products/useDeleteProduct';
import { useToast } from '@/contexts/ToastContext';
import { getErrorMessage } from '@/services/httpClient';
import FilterModal from '@/components/FilterModal';
import ModalConfirm from '@/components/ModalConfirm';
import { ProductFilters } from './ProductFilters';
import { ProductTable } from './ProductTable';
import { ProductCardList } from './ProductCardList';
import styles from './AdminProdutos.module.scss';
import sharedStyles from '../../app/dashboard/shared.module.scss';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function AdminProdutosContainer() {
  // Filters State
  const [page, setPage] = useState(1);
  const [searchTitle, setSearchTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedSeller, setSelectedSeller] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);

  // Modal Filters State
  const [filterOpen, setFilterOpen] = useState(false);

  // Exclusão State & Mutation
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const deleteMutation = useDeleteProduct();
  const { addToast } = useToast();

  // Queries
  const { data, isLoading, isError } = useAdminProducts({
    page,
    limit: 20,
    search: searchTitle || undefined,
    categoryId: selectedCategory.length > 0 ? selectedCategory : undefined,
    sellerId: selectedSeller.length > 0 ? selectedSeller : undefined,
    minPrice,
    maxPrice,
  });

  const { data: categoriesData } = useCategories();
  const { data: usersData } = useUsers();

  const categories = categoriesData?.data.map(c => ({ id: c.id, name: c.name })) || [];
  const sellers = usersData?.map(u => ({ id: u.id, name: u.name })) || [];

  const activeFilterCount = [
    selectedCategory.length > 0, 
    selectedSeller.length > 0, 
    minPrice !== undefined, 
    maxPrice !== undefined
  ].filter(Boolean).length;

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      await deleteMutation.mutateAsync(deleteId);
      addToast({ type: 'success', message: 'Produto excluído com sucesso.' });
    } catch (err) {
      addToast({ type: 'error', message: getErrorMessage(err, 'Falha ao excluir o produto.') });
    } finally {
      setDeleteId(null);
    }
  };

  if (isLoading) {
    return (
      <div className={sharedStyles.loading}>
        <Loader2 size={24} style={{ animation: 'spin 1s linear infinite' }} />
        <span style={{ marginLeft: '8px' }}>Carregando produtos...</span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={sharedStyles.loading}>
        <span style={{ color: 'var(--color-danger)' }}>Erro ao carregar os produtos da API.</span>
      </div>
    );
  }

  const products = data?.products || [];
  const totalPages = data?.totalPages || 1;
  const totalItems = data?.totalItems || 0;

  return (
    <div className={sharedStyles.page}>
      <div className={sharedStyles.header}>
        <h1 className={sharedStyles.title}>Todos os Produtos</h1>
        <span style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--fs-sm)' }}>
          {totalItems} produtos encontrados
        </span>
      </div>

      {/* Filter Bar */}
      <ProductFilters
        searchTitle={searchTitle}
        setSearchTitle={(val) => {
          setSearchTitle(val);
          setPage(1);
        }}
        activeFilterCount={activeFilterCount}
        onOpenFilters={() => setFilterOpen(true)}
      />

      {/* Mobile-first views */}
      <div className={styles.mobileView}>
        <ProductCardList products={products} onDelete={setDeleteId} />
      </div>

      <div className={styles.desktopView}>
        <ProductTable products={products} onDelete={setDeleteId} />
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            className={styles.pageBtn}
            onClick={() => setPage(p => p - 1)}
            disabled={page <= 1}
          >
            <ChevronLeft size={18} />
            Anterior
          </button>
          <span className={styles.pageInfo}>
            Página {page} de {totalPages}
          </span>
          <button
            className={styles.pageBtn}
            onClick={() => setPage(p => p + 1)}
            disabled={page >= totalPages}
          >
            Próximo
            <ChevronRight size={18} />
          </button>
        </div>
      )}

      {/* Global Filter Modal Reused */}
      <FilterModal
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
        selectedCategory={selectedCategory}
        selectedSeller={selectedSeller}
        minPrice={minPrice}
        maxPrice={maxPrice}
        categories={categories}
        sellers={sellers}
        showSellerFilter={true}
        showPriceFilter={true}
        onFilter={(f) => {
          setSelectedCategory(f.category || []);
          setSelectedSeller(f.seller || []);
          setMinPrice(f.minPrice);
          setMaxPrice(f.maxPrice);
          setPage(1);
          setFilterOpen(false);
        }}
      />

      {/* Modal de Exclusão */}
      <ModalConfirm
        isOpen={!!deleteId}
        title="Excluir produto"
        message="Tem certeza que deseja excluir este produto? Essa ação não pode ser desfeita."
        confirmText={deleteMutation.isPending ? 'Excluindo...' : 'Excluir'}
        variant="danger"
        onConfirm={handleDelete}
        onCancel={() => !deleteMutation.isPending && setDeleteId(null)}
      />
    </div>
  );
}
