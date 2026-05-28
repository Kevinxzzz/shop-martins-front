'use client';

import { X, RotateCcw, Trash2, Tag, Loader2 } from 'lucide-react';
import styles from './AdminCategories.module.scss';
import { useCategories } from '@/hooks/categories/useCategories';
import { useRestoreCategory, useDeleteCategoryPermanently } from '@/hooks/categories/useCategoryMutations';
import ModalConfirm from '@/components/ModalConfirm';
import { useState } from 'react';

interface ModalTrashProps {
  isOpen: boolean;
  onClose: () => void;
}

import type { Category } from '@/types';

export default function ModalTrash({ isOpen, onClose }: ModalTrashProps) {
  const { data, isLoading } = useCategories({ status: "DELETED" });
  const restoreMutation = useRestoreCategory();
  const purgeMutation = useDeleteCategoryPermanently();

  const [confirmPurgeCat, setConfirmPurgeCat] = useState<Category | null>(null);

  if (!isOpen) return null;

  const categories = data?.data || [];

  const handleRestore = async (id: string) => {
    await restoreMutation.mutateAsync(id);
  };

  const handlePurge = async () => {
    if (confirmPurgeCat) {
      await purgeMutation.mutateAsync(confirmPurgeCat.id);
      setConfirmPurgeCat(null);
    }
  };

  return (
    <>
      <div className={styles.modalOverlay} onClick={onClose} aria-hidden="true" />
      <div className={styles.modalTrash} role="dialog" aria-modal="true" aria-labelledby="trash-modal-title">
        <div className={styles.modalHeader}>
          <h3 id="trash-modal-title" className={styles.modalTitle}>
            <Trash2 size={20} style={{ color: 'var(--color-danger)' }} />
            Lixeira de Categorias
          </h3>
          <button className={styles.modalCloseBtn} onClick={onClose} title="Fechar">
            <X size={20} />
          </button>
        </div>

        <div className={styles.modalContent}>
          {isLoading ? (
            <div className={styles.emptyTrash}>
              <Loader2 className={styles.spinner} size={24} />
              Carregando lixeira...
            </div>
          ) : categories.length === 0 ? (
            <div className={styles.emptyTrash}>
              Nenhuma categoria na lixeira.
            </div>
          ) : (
            <div className={styles.trashList}>
              {categories.map(cat => (
                <div key={cat.id} className={styles.trashRow}>
                  <div className={styles.trashInfo}>
                    <div className={styles.trashNameWrapper}>
                      <Tag size={14} className={styles.trashTagIcon} />
                      <span className={styles.trashName}>{cat.name}</span>
                    </div>
                    <span className={styles.trashSlug}>{cat.slug}</span>
                  </div>

                  <div className={styles.trashActions}>
                    <button
                      className={styles.restoreBtn}
                      onClick={() => handleRestore(cat.id)}
                      title="Restaurar categoria"
                      disabled={restoreMutation.isPending}
                    >
                      <RotateCcw size={14} />
                      Restaurar
                    </button>
                    <button
                      className={styles.purgeBtn}
                      onClick={() => setConfirmPurgeCat(cat)}
                      title="Excluir permanentemente"
                    >
                      <Trash2 size={14} />
                      Excluir
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <ModalConfirm
        isOpen={!!confirmPurgeCat}
        title="Excluir permanentemente"
        message={
          <>
            Deseja excluir permanentemente <strong>"{confirmPurgeCat?.name}"</strong>?
            <br /><br />
            Essa ação não poderá ser desfeita e falhará caso existam produtos ativos vinculados.
          </>
        }
        confirmText={purgeMutation.isPending ? "Excluindo..." : "Excluir permanentemente"}
        variant="danger"
        onConfirm={handlePurge}
        onCancel={() => !purgeMutation.isPending && setConfirmPurgeCat(null)}
      />
    </>
  );
}
