'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Plus, PackageOpen, Loader2, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import ModalConfirm from '@/components/ModalConfirm';
import { useAuth } from '@/hooks/auth/useAuth';
import { useUserProducts } from '@/hooks/products/useUserProducts';
import { useDeleteProduct } from '@/hooks/products/useDeleteProduct';
import { useToast } from '@/contexts/ToastContext';
import { getErrorMessage } from '@/services/httpClient';
import type { Product } from '@/types';
import { ProductListItem } from './ProductListItem';
import styles from './styles.module.scss';

export default function DashboardProductsContainer() {
  const router = useRouter();
  const { user } = useAuth();
  const { addToast } = useToast();

  const [page, setPage] = useState(1);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const { data, isLoading, isError, error } = useUserProducts(user?.id, page);
  const deleteMutation = useDeleteProduct();

  const products = data?.products ?? [];
  const totalPages = data?.totalPages ?? 0;
  const totalItems = data?.totalItems ?? 0;

  // Após a API retornar, se a página atual ficou inválida (ex: exclusão do último item),
  // volta para a última página válida. A API é a fonte da verdade.
  useEffect(() => {
    if (data && page > data.totalPages && data.totalPages > 0) {
      setPage(data.totalPages);
    }
  }, [data, page]);

  // ── Navegação (Container decide as rotas) ──────────────────
  const handleView = (product: Product) => {
    router.push(`/produto/${product.id}`);
  };

  const handleEdit = (product: Product) => {
    router.push(`/dashboard/produtos/${product.id}/editar`);
  };

  // ── Exclusão ──────────────────────────────────────────────
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

  // ── Loading State ─────────────────────────────────────────
  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <Loader2 size={32} className={styles.spinner} />
        <span>Carregando produtos...</span>
      </div>
    );
  }

  // ── Error State ───────────────────────────────────────────
  if (isError) {
    return (
      <div className={styles.errorContainer}>
        <AlertCircle size={48} />
        <h3>Erro ao carregar produtos</h3>
        <p>{getErrorMessage(error, 'Não foi possível carregar seus produtos. Tente novamente mais tarde.')}</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Meus Produtos</h1>
        <Link href="/dashboard/produtos/novo" className={styles.addBtn}>
          <Plus size={18} /> Novo Produto
        </Link>
      </header>

      {/* ── Empty State ─────────────────────────────────── */}
      {totalItems === 0 ? (
        <div className={styles.emptyState}>
          <PackageOpen size={48} style={{ margin: '0 auto', marginBottom: '1rem', color: 'var(--color-text-tertiary)' }} />
          <h3 style={{ fontSize: '1.125rem', fontWeight: 500, color: 'var(--color-text)', marginBottom: '0.25rem' }}>
            Nenhum produto cadastrado
          </h3>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Você ainda não cadastrou nenhum produto. Clique no botão acima para começar.
          </p>
        </div>
      ) : (
        <>
          {/* ── Grid de Produtos ────────────────────────── */}
          <div className={styles.grid}>
            {products.map(product => (
              <ProductListItem
                key={product.id}
                product={product}
                onView={handleView}
                onEdit={handleEdit}
                onDelete={setDeleteId}
              />
            ))}
          </div>

          {/* ── Paginação ───────────────────────────────── */}
          {totalPages > 1 && (
            <div className={styles.pagination}>
              <button
                className={styles.pageBtn}
                onClick={() => setPage(p => p - 1)}
                disabled={page <= 1}
                aria-label="Página anterior"
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
                aria-label="Próxima página"
              >
                Próximo
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </>
      )}

      {/* ── Modal de Exclusão ───────────────────────────── */}
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
