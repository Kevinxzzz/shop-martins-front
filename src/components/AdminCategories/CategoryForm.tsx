'use client';

import { Save, X } from 'lucide-react';
import { slugify } from '@/utils';
import styles from './AdminCategories.module.scss';
import { useState } from 'react';

interface CategoryFormProps {
  initialName?: string;
  editId?: string | null;
  onSave: (name: string) => Promise<void>;
  onCancel: () => void;
  isLoading: boolean;
}

export default function CategoryForm({
  initialName = '',
  editId,
  onSave,
  onCancel,
  isLoading,
}: CategoryFormProps) {
  const [formName, setFormName] = useState(initialName);

  const handleSubmit = async () => {
    if (!formName.trim()) return;
    await onSave(formName.trim());
  };

  return (
    <div className={styles.form}>
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
            disabled={isLoading}
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
          onClick={handleSubmit}
          disabled={!formName.trim() || isLoading}
        >
          <Save size={16} /> {isLoading ? 'Salvando...' : editId ? 'Atualizar' : 'Criar Categoria'}
        </button>
        <button type="button" className={styles.cancelBtn} onClick={onCancel} disabled={isLoading}>
          <X size={16} /> Cancelar
        </button>
      </div>
    </div>
  );
}
