'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Upload, Save, X } from 'lucide-react';
import MultiSelect from '@/components/MultiSelect';
import { getCategories } from '@/mock/api';
import type { Categoria } from '@/types';
import styles from '../../shared.module.scss';

export default function NewProductPage() {
  const router = useRouter();
  const [categories, setCategories] = useState<Categoria[]>([]);
  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const urls = Array.from(files).map(f => URL.createObjectURL(f));
    setPreviews(prev => [...prev, ...urls]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await new Promise(r => setTimeout(r, 1000));
    setSaving(false);
    router.push('/dashboard/produtos');
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Novo Produto</h1>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGrid}>
          <div className={`${styles.formGroup} ${styles.full}`}>
            <label className={styles.label} htmlFor="titulo">Título do Produto</label>
            <input id="titulo" className={styles.input} placeholder="Ex: Nike Mercurial Vapor 15 Elite" required />
          </div>

          <div className={`${styles.formGroup} ${styles.full}`}>
            <label className={styles.label} htmlFor="descricao">Descrição</label>
            <textarea id="descricao" className={styles.textarea} placeholder="Descreva o produto em detalhes..." required />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="preco">Preço (R$)</label>
            <input id="preco" type="number" className={styles.input} placeholder="0,00" step="0.01" min="0" required />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Categorias</label>
            <MultiSelect
              options={categories}
              selected={selectedCats}
              onChange={setSelectedCats}
              placeholder="Selecione categorias..."
            />
          </div>

          <div className={`${styles.formGroup} ${styles.full}`}>
            <label className={styles.label}>Imagens e Vídeo</label>
            <label className={styles.uploadArea} htmlFor="files">
              <Upload size={24} className={styles.uploadIcon} />
              <div className={styles.uploadText}>Clique para adicionar mídias</div>
              <div className={styles.uploadHint}>JPG, PNG, MP4 — máx 10MB cada</div>
            </label>
            <input
              id="files"
              type="file"
              accept="image/*,video/*"
              multiple
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />

            {previews.length > 0 && (
              <div className={styles.previewGrid}>
                {previews.map((url, i) => (
                  <div key={i} className={styles.previewItem}>
                    <img src={url} alt={`Preview ${i + 1}`} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={styles.formActions}>
          <button type="submit" className={styles.submitBtn} disabled={saving}>
            <Save size={16} /> {saving ? 'Salvando...' : 'Salvar Produto'}
          </button>
          <button type="button" className={styles.cancelBtn} onClick={() => router.back()}>
            <X size={16} /> Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
