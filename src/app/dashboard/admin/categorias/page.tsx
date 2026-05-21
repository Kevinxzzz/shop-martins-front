'use client';

import { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2, Tag, Save, X } from 'lucide-react';
import ModalConfirm from '@/components/ModalConfirm';
import { getCategories } from '@/mock/api';
import { slugify } from '@/utils';
import type { Categoria } from '@/types';
import styles from '../../shared.module.scss';

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [editId, setEditId] = useState<string | null>(null);
  const [showCreate, setShowCreate] = useState(false);
  const [formName, setFormName] = useState('');

  useEffect(() => {
    getCategories().then(c => {
      setCategories(c);
      setLoading(false);
    });
  }, []);

  const handleCreate = () => {
    if (!formName.trim()) return;
    const newCat: Categoria = {
      id: `cat-${Date.now()}`,
      nome: formName.trim(),
      slug: slugify(formName.trim()),
    };
    setCategories(prev => [...prev, newCat]);
    setFormName('');
    setShowCreate(false);
  };

  const handleEdit = () => {
    if (!formName.trim() || !editId) return;
    setCategories(prev => prev.map(c =>
      c.id === editId ? { ...c, nome: formName.trim(), slug: slugify(formName.trim()) } : c
    ));
    setEditId(null);
    setFormName('');
  };

  const handleDelete = () => {
    if (deleteId) {
      setCategories(prev => prev.filter(c => c.id !== deleteId));
      setDeleteId(null);
    }
  };

  const startEdit = (cat: Categoria) => {
    setEditId(cat.id);
    setFormName(cat.nome);
    setShowCreate(false);
  };

  const cancelForm = () => {
    setEditId(null);
    setShowCreate(false);
    setFormName('');
  };

  if (loading) return <div className={styles.loading}>Carregando...</div>;

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Categorias</h1>
        {!showCreate && !editId && (
          <button className={styles.addBtn} onClick={() => { setShowCreate(true); setFormName(''); }}>
            <Plus size={16} /> Nova Categoria
          </button>
        )}
      </div>

      {/* Create / Edit Form */}
      {(showCreate || editId) && (
        <div className={styles.form} style={{ marginBottom: 'var(--space-6)' }}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="catName">Nome da Categoria</label>
              <input
                id="catName"
                className={styles.input}
                value={formName}
                onChange={e => setFormName(e.target.value)}
                placeholder="Ex: Chuteiras"
                autoFocus
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Slug (auto)</label>
              <input
                className={styles.input}
                value={slugify(formName)}
                disabled
                readOnly
              />
            </div>
          </div>
          <div className={styles.formActions}>
            <button
              type="button"
              className={styles.submitBtn}
              onClick={editId ? handleEdit : handleCreate}
              disabled={!formName.trim()}
            >
              <Save size={16} /> {editId ? 'Atualizar' : 'Criar Categoria'}
            </button>
            <button type="button" className={styles.cancelBtn} onClick={cancelForm}>
              <X size={16} /> Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Slug</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {categories.map(cat => (
              <tr key={cat.id}>
                <td>
                  <div className={styles.productRow}>
                    <Tag size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                    <span>{cat.nome}</span>
                  </div>
                </td>
                <td style={{ color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)' }}>
                  {cat.slug}
                </td>
                <td>
                  <div className={styles.actionBtns}>
                    <button
                      className={styles.actionBtn}
                      onClick={() => startEdit(cat)}
                      title="Editar"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      className={`${styles.actionBtn} ${styles.danger}`}
                      onClick={() => setDeleteId(cat.id)}
                      title="Excluir"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ModalConfirm
        isOpen={!!deleteId}
        title="Excluir categoria"
        message="Tem certeza que deseja excluir esta categoria? Produtos associados perderão a referência."
        confirmText="Excluir"
        variant="danger"
        onConfirm={handleDelete}
        onCancel={() => setDeleteId(null)}
      />
    </div>
  );
}
