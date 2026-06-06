'use client';

import { useState } from 'react';
import { Plus, Trash2, Loader2 } from 'lucide-react';
import ModalConfirm from '@/components/ModalConfirm';
import styles from './AdminCategories.module.scss';
import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';
import ModalTrash from './ModalTrash';

import { useCategories } from '@/hooks/categories/useCategories';
import { useCreateCategory, useUpdateCategory, useMoveCategoryToTrash } from '@/hooks/categories/useCategoryMutations';
import type { Category } from '@/types';

export default function AdminCategoriesContainer() {
  const { data, isLoading, error } = useCategories({ status: "ACTIVE" });
  const trashQuery = useCategories({ status: "DELETED" });
  
  const createMutation = useCreateCategory();
  const updateMutation = useUpdateCategory();
  const moveToTrashMutation = useMoveCategoryToTrash();

  const [deleteCat, setDeleteCat] = useState<Category | null>(null);
  const [editCat, setEditCat] = useState<Category | null>(null);
  const [showCreate, setShowCreate] = useState(false);
  const [showTrashModal, setShowTrashModal] = useState(false);

  const activeCategories = data?.data || [];
  const deletedCount = trashQuery.data?.meta.total || 0;

  const handleCreateOrUpdate = async (name: string) => {
    if (editCat) {
      await updateMutation.mutateAsync({ id: editCat.id, data: { name } });
      setEditCat(null);
    } else {
      await createMutation.mutateAsync({ name });
      setShowCreate(false);
    }
  };

  const handleSoftDelete = async () => {
    if (deleteCat) {
      await moveToTrashMutation.mutateAsync(deleteCat.id);
      setDeleteCat(null);
    }
  };

  const startEdit = (cat: Category) => {
    setEditCat(cat);
    setShowCreate(false);
  };

  const cancelForm = () => {
    setEditCat(null);
    setShowCreate(false);
  };

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <Loader2 className={styles.spinner} size={32} />
        <p>Carregando categorias...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p>Erro ao carregar categorias: {error.message}</p>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Categorias</h1>
        <div className={styles.headerActions}>
          <button
            className={styles.trashBtn}
            onClick={() => setShowTrashModal(true)}
            title="Ver lixeira de categorias"
          >
            <Trash2 size={16} />
            Lixeira
            {deletedCount > 0 && (
              <span className={styles.trashBadge}>{deletedCount}</span>
            )}
          </button>
          {!showCreate && !editCat && (
            <button className={styles.addBtn} onClick={() => setShowCreate(true)}>
              <Plus size={16} /> Nova Categoria
            </button>
          )}
        </div>
      </div>

      {/* Create / Edit Form */}
      {(showCreate || editCat) && (
        <CategoryForm
          initialName={editCat?.name || ''}
          editId={editCat?.id || null}
          onSave={handleCreateOrUpdate}
          onCancel={cancelForm}
          isLoading={createMutation.isPending || updateMutation.isPending}
        />
      )}

      {/* List */}
      <CategoryList
        categories={activeCategories}
        onEdit={startEdit}
        onDelete={setDeleteCat}
      />

      {/* Modal Lixeira */}
      <ModalTrash
        isOpen={showTrashModal}
        onClose={() => setShowTrashModal(false)}
      />

      {/* Confirmar Mover para Lixeira */}
      <ModalConfirm
        isOpen={!!deleteCat}
        title="Mover para lixeira"
        message={
          <>
            Deseja arquivar <strong>"{deleteCat?.name}"</strong>?
            <br /><br />
            Ela será movida para a lixeira e não aparecerá nos produtos ativos.
          </>
        }
        confirmText={moveToTrashMutation.isPending ? "Movendo..." : "Excluir"}
        variant="danger"
        onConfirm={handleSoftDelete}
        onCancel={() => !moveToTrashMutation.isPending && setDeleteCat(null)}
      />
    </div>
  );
}
