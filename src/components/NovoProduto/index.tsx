'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Save, X, Tag, DollarSign } from 'lucide-react';
import MultiSelect from '@/components/MultiSelect';
import { getCategories } from '@/mock/api';
import type { Category } from '@/types';
import { InputField } from '@/components/InputField';
import { TextAreaField } from './TextAreaField';
import { MediaUpload } from './MediaUpload';
import styles from './NovoProduto.module.scss';



export default function NovoProdutoContainer() {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);

  // Controlled form states
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  // Cleanup object URLs on unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      previews.forEach(url => {
        if (url.startsWith('blob:')) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, [previews]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const urls = Array.from(files).map(f => URL.createObjectURL(f));
    setPreviews(prev => [...prev, ...urls]);
  };

  const handleRemoveImage = (indexToRemove: number) => {
    setPreviews(prev => {
      const target = prev[indexToRemove];
      if (target && target.startsWith('blob:')) {
        URL.revokeObjectURL(target);
      }
      return prev.filter((_, i) => i !== indexToRemove);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    // Mimic API save latency
    await new Promise(r => setTimeout(r, 1000));
    setSaving(false);
    router.push('/dashboard/produtos');
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Novo Produto</h1>
      </div>

      <form className={styles.formCard} onSubmit={handleSubmit}>
        <div className={styles.formGrid}>
          <InputField
            id="titulo"
            label="Título do Produto"
            value={titulo}
            onChange={setTitulo}
            placeholder="Ex: Nike Mercurial Vapor 15 Elite"
            icon={Tag}
            required
            fullWidth
          />

          <TextAreaField
            id="descricao"
            label="Descrição"
            value={descricao}
            onChange={setDescricao}
            placeholder="Descreva o produto em detalhes..."
            required
            fullWidth
          />

          <InputField
            id="preco"
            label="Preço (R$)"
            value={preco}
            onChange={setPreco}
            placeholder="0,00"
            type="number"
            icon={DollarSign}
            step="0.01"
            min="0"
            required
          />

          <div className={styles.formGroup}>
            <label className={styles.label}>Categorias</label>
            <MultiSelect
              options={categories}
              selected={selectedCats}
              onChange={setSelectedCats}
              placeholder="Selecione categorias..."
            />
          </div>

          <MediaUpload
            previews={previews}
            onUpload={handleImageUpload}
            onRemove={handleRemoveImage}
          />
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

