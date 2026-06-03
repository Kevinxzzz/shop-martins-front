'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Save, X, Upload, Package, AlignLeft, DollarSign, Loader2 } from 'lucide-react';
import { InputField } from '@/components/InputField';
import { FormSection } from '@/components/AdminConfiguracoes/FormSection';
import { CategoryPills } from './CategoryPills';
import { getProductById, getCategories } from '@/mock/api';
import type { Product, Category } from '@/types';
import styles from './EditProduct.module.scss';

interface EditProductContainerProps {
  productId: string;
}

export default function EditProductContainer({ productId }: EditProductContainerProps) {
  const router = useRouter();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Form state
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [selectedCats, setSelectedCats] = useState<string[]>([]);

  useEffect(() => {
    Promise.all([getProductById(productId), getCategories()]).then(([p, cats]) => {
      setCategories(cats);
      if (p) {
        setProduct(p);
        setTitulo(p.title);
        setDescricao(p.description);
        setPreco(p.price.toString());
        setSelectedCats([p.categoryId]);
      }
      setLoading(false);
    });
  }, [productId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    // Simulating API call
    await new Promise(r => setTimeout(r, 800));
    setSaving(false);
    router.push('/dashboard/produtos');
  };

  if (loading) {
    return (
      <div className={styles.pageContainer} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px', color: 'var(--color-text-tertiary)' }}>
        <Loader2 size={24} className={styles.spinner} />
        <span style={{ marginLeft: '8px' }}>Carregando produto...</span>
      </div>
    );
  }

  if (!product) {
    return (
      <div className={styles.pageContainer} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px', color: 'var(--color-danger)' }}>
        <span>Produto não encontrado.</span>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Editar Produto</h1>
        <p className={styles.subtitle}>Altere as informações, categorias e mídias do seu produto.</p>
      </div>

      <form className={styles.formContainer} onSubmit={handleSubmit}>
        
        {/* Informações Básicas */}
        <FormSection
          title="Informações Básicas"
          description="Título, descrição e preço do produto."
        >
          <div className={styles.formGrid}>
            <InputField
              id="editTitulo"
              label="Título do Produto"
              value={titulo}
              onChange={setTitulo}
              placeholder="Ex: Camiseta Básica"
              required
              icon={Package}
              fullWidth
            />

            <InputField
              id="editPreco"
              label="Preço (R$)"
              value={preco}
              onChange={setPreco}
              placeholder="0.00"
              required
              type="number"
              step="0.01"
              min="0"
              icon={DollarSign}
            />

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label className={styles.label} htmlFor="editDesc">
                <AlignLeft size={14} /> Descrição
              </label>
              <div className={styles.inputWrapper}>
                <textarea
                  id="editDesc"
                  className={styles.textarea}
                  value={descricao}
                  onChange={e => setDescricao(e.target.value)}
                  placeholder="Detalhes sobre o produto..."
                  required
                />
              </div>
            </div>
          </div>
        </FormSection>

        {/* Categorias */}
        <FormSection
          title="Categorias"
          description="Selecione as categorias que melhor descrevem este produto."
        >
          <CategoryPills
            categories={categories}
            selectedIds={selectedCats}
            onChange={setSelectedCats}
          />
        </FormSection>

        {/* Mídias */}
        <FormSection
          title="Mídias do Produto"
          description="Gerencie as fotos e vídeos do seu produto."
        >
          <div className={styles.mediaGrid}>
            {product.media.filter(m => m.type === 'image').map(m => (
              <div key={m.id} className={styles.mediaItem}>
                <Image src={m.fileUrl} alt="Mídia" fill sizes="(max-width: 640px) 100px, 120px" unoptimized />
              </div>
            ))}
            
            <label className={styles.uploadArea} htmlFor="editFiles">
              <Upload size={24} className={styles.uploadIcon} />
              <span className={styles.uploadText}>Adicionar Mídias</span>
            </label>
            <input id="editFiles" type="file" accept="image/*,video/*" multiple style={{ display: 'none' }} />
          </div>
        </FormSection>

        {/* Barra de Ações (Sticky no Mobile) */}
        <div className={styles.formActions}>
          <button type="button" className={styles.cancelBtn} onClick={() => router.back()} disabled={saving}>
            <X size={16} /> Cancelar
          </button>
          <button type="submit" className={styles.submitBtn} disabled={saving}>
            {saving ? (
              <>
                <Loader2 size={16} className={styles.spinner} />
                Salvando...
              </>
            ) : (
              <>
                <Save size={16} /> Salvar Alterações
              </>
            )}
          </button>
        </div>

      </form>
    </div>
  );
}
