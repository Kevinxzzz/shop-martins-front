'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { Save, X, Upload } from 'lucide-react';
import MultiSelect from '@/components/MultiSelect';
import { getProductById, getCategories } from '@/mock/api';
import type { Product, Category } from '@/types';
import styles from '../../../shared.module.scss';

export default function EditProductPage() {
  const router = useRouter();
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Form state
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState(0);
  const [selectedCats, setSelectedCats] = useState<string[]>([]);

  useEffect(() => {
    const id = params.id as string;
    Promise.all([getProductById(id), getCategories()]).then(([p, cats]) => {
      setCategories(cats);
      if (p) {
        setProduct(p);
        setTitulo(p.title);
        setDescricao(p.description);
        setPreco(p.price);
        setSelectedCats([p.categoryId]);
      }
      setLoading(false);
    });
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await new Promise(r => setTimeout(r, 800));
    setSaving(false);
    router.push('/dashboard/produtos');
  };

  if (loading) return <div className={styles.loading}>Carregando...</div>;
  if (!product) return <div className={styles.loading}>Produto não encontrado</div>;

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Editar Produto</h1>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGrid}>
          <div className={`${styles.formGroup} ${styles.full}`}>
            <label className={styles.label} htmlFor="editTitulo">Título do Produto</label>
            <input
              id="editTitulo"
              className={styles.input}
              value={titulo}
              onChange={e => setTitulo(e.target.value)}
              required
            />
          </div>

          <div className={`${styles.formGroup} ${styles.full}`}>
            <label className={styles.label} htmlFor="editDesc">Descrição</label>
            <textarea
              id="editDesc"
              className={styles.textarea}
              value={descricao}
              onChange={e => setDescricao(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="editPreco">Preço (R$)</label>
            <input
              id="editPreco"
              type="number"
              className={styles.input}
              value={preco}
              onChange={e => setPreco(Number(e.target.value))}
              step="0.01"
              min="0"
              required
            />
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
            <label className={styles.label}>Mídias atuais</label>
            <div className={styles.previewGrid}>
              {product.media.filter(m => m.type === 'image').map(m => (
                <div key={m.id} className={styles.previewItem}>
                  <Image src={m.fileUrl} alt="Mídia" width={72} height={72} unoptimized />
                </div>
              ))}
            </div>
            <label className={styles.uploadArea} htmlFor="editFiles" style={{ marginTop: 'var(--space-3)' }}>
              <Upload size={20} className={styles.uploadIcon} />
              <div className={styles.uploadText}>Adicionar novas mídias</div>
            </label>
            <input id="editFiles" type="file" accept="image/*,video/*" multiple style={{ display: 'none' }} />
          </div>
        </div>

        <div className={styles.formActions}>
          <button type="submit" className={styles.submitBtn} disabled={saving}>
            <Save size={16} /> {saving ? 'Salvando...' : 'Salvar Alterações'}
          </button>
          <button type="button" className={styles.cancelBtn} onClick={() => router.back()}>
            <X size={16} /> Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
