'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Save, X, Tag, DollarSign, Loader2 } from 'lucide-react';
import { InputField } from '@/components/InputField';
import { TextAreaField } from '@/components/NovoProduto/TextAreaField';
import MultiSelect from '@/components/MultiSelect';
import { MediaUpload } from '@/components/NovoProduto/MediaUpload';
import { useCategories } from '@/hooks/categories/useCategories';
import { useProductDetail } from '@/hooks/products/useProductDetail';
import { useUpdateProduct } from '@/hooks/products/useUpdateProduct';
import { useUpdateProductMedia } from '@/hooks/products/useUpdateProductMedia';
import { useToast } from '@/contexts/ToastContext';
import type { UpdateProductDTO, UpdateProductMediaDTO, Media } from '@/types/productType';
import styles from '@/components/NovoProduto/NovoProduto.module.scss'; // Reuse styles
import { formatCurrencyInput, parseCurrencyToCents } from '@/utils';

interface EditProductContainerProps {
  productId: string;
}

export default function EditProductContainer({ productId }: EditProductContainerProps) {
  const router = useRouter();
  const { addToast } = useToast();
  
  const { data: product, isLoading: loadingProduct } = useProductDetail(productId);
  const { data: categoriesResponse, isLoading: loadingCategories } = useCategories({ limit: 100 });
  const categories = categoriesResponse?.data || [];

  const { mutateAsync: updateProduct } = useUpdateProduct();
  const { mutateAsync: updateProductMedia } = useUpdateProductMedia();

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form states
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [selectedCats, setSelectedCats] = useState<string[]>([]);

  // Media states
  const [existingMedia, setExistingMedia] = useState<Media[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  useEffect(() => {
    if (product) {
      setTitulo(product.name || '');
      setDescricao(product.description || '');
      setPreco(product.price ? formatCurrencyInput(product.price) : '');
      
      const cats = product.categories ? product.categories.map((c: any) => c.category?.id || c.categoryId) : [];
      setSelectedCats(cats);
      
      setExistingMedia(product.media || []);
    }
  }, [product]);

  useEffect(() => {
    return () => {
      previews.forEach(url => {
        if (url.startsWith('blob:')) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, [previews]);

  const handleAddFiles = (newFiles: File[], newPreviews: string[]) => {
    setFiles(prev => [...prev, ...newFiles]);
    setPreviews(prev => [...prev, ...newPreviews]);
  };

  const handleRemoveFile = (indexToRemove: number) => {
    // MediaUpload passes a flat index covering both existing and new files
    // The first `existingMedia.length` indices are existing media.
    if (indexToRemove < existingMedia.length) {
      setExistingMedia(prev => prev.filter((_, i) => i !== indexToRemove));
    } else {
      const newIndex = indexToRemove - existingMedia.length;
      setPreviews(prev => {
        const target = prev[newIndex];
        if (target && target.startsWith('blob:')) {
          URL.revokeObjectURL(target);
        }
        return prev.filter((_, i) => i !== newIndex);
      });
      setFiles(prev => prev.filter((_, i) => i !== newIndex));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || !product) return;

    if (!titulo.trim()) {
      addToast({ type: 'alert', message: 'O título é obrigatório.' });
      return;
    }

    const hasAnyMedia = existingMedia.length > 0 || files.some(file => file.type.startsWith('image/'));
    if (!hasAnyMedia) {
      addToast({ type: 'alert', message: 'O produto deve possuir pelo menos uma imagem.' });
      return;
    }

    setIsSubmitting(true);

    const priceCents = preco ? parseCurrencyToCents(preco) : undefined;
    const oldPrice = product.price;

    const currentTitle = product.name;
    const currentCats = product.categories ? product.categories.map((c: any) => c.category?.id || c.categoryId) : [];

    const hasDataChanged =
      titulo.trim() !== currentTitle ||
      descricao.trim() !== (product.description || '') ||
      priceCents !== oldPrice ||
      JSON.stringify(selectedCats.sort()) !== JSON.stringify(currentCats.sort());

    const initialMediaIds = product.media?.map((m: any) => m.id) || [];
    const keptMediaIds = existingMedia.map(m => m.id);
    const hasMediaChanged = 
      files.length > 0 || 
      initialMediaIds.length !== keptMediaIds.length || 
      !initialMediaIds.every(id => keptMediaIds.includes(id));

    if (!hasDataChanged && !hasMediaChanged) {
      addToast({ type: 'alert', message: 'Nenhuma alteração foi feita.' });
      setIsSubmitting(false);
      return;
    }

    let dataUpdateSuccess = false;

    try {
      if (hasDataChanged) {
        const dataPayload: UpdateProductDTO = {
          name: titulo.trim(),
          description: descricao.trim() || undefined,
          price: priceCents,
          categoryIds: selectedCats.length > 0 ? selectedCats : undefined,
        };
        await updateProduct({ productId, data: dataPayload });
        dataUpdateSuccess = true;
      }

      if (hasMediaChanged) {
        const mediaPayload: UpdateProductMediaDTO = {
          keepMediaIds: keptMediaIds,
          files: files,
        };
        await updateProductMedia({ productId, data: mediaPayload });
      }

      addToast({
        type: 'success',
        title: 'Produto Atualizado',
        message: 'O produto foi atualizado com sucesso!',
      });

      router.push('/dashboard/produtos');
    } catch (error: any) {
      if (hasDataChanged && dataUpdateSuccess && hasMediaChanged) {
        addToast({
          type: 'error',
          title: 'Erro nas Mídias',
          message: 'Os dados foram salvos, mas houve um erro ao atualizar as mídias. Tente novamente.',
        });
      } else {
        addToast({
          type: 'error',
          title: 'Erro na Atualização',
          message: error.response?.data?.message || 'Ocorreu um erro ao atualizar o produto.',
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const multiSelectOptions = categories.map((cat: any) => ({
    id: cat.id,
    name: cat.name,
  }));

  // Combine previews for the MediaUpload component
  const combinedPreviews = [
    ...existingMedia.map(m => m.fileUrl || (m as any).url),
    ...previews
  ];

  if (loadingProduct) {
    return (
      <div className={styles.pageContainer} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px', color: 'var(--color-text-tertiary)' }}>
        <Loader2 size={24} className="animate-spin" />
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
            disabled={isSubmitting}
          />

          <TextAreaField
            id="descricao"
            label="Descrição"
            value={descricao}
            onChange={setDescricao}
            placeholder="Descreva o produto em detalhes..."
            required
            fullWidth
            disabled={isSubmitting}
          />

          <InputField
            id="preco"
            label="Preço (R$)"
            value={preco}
            onChange={(val) => setPreco(formatCurrencyInput(val))}
            placeholder="0,00"
            icon={DollarSign}
            required
            disabled={isSubmitting}
          />

          <div className={styles.formGroup}>
            <label className={styles.label}>Categorias</label>
            {loadingCategories ? (
              <div style={{ padding: '8px', color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                <Loader2 size={16} className="animate-spin inline mr-2" /> Carregando categorias...
              </div>
            ) : (
              <MultiSelect
                options={multiSelectOptions}
                selected={selectedCats}
                onChange={setSelectedCats}
                placeholder="Selecione categorias..."
              />
            )}
          </div>

          <MediaUpload
            files={[]} // MediaUpload ignores this if previews are provided, it just calls onAddFiles
            previews={combinedPreviews}
            onAddFiles={handleAddFiles}
            onRemove={handleRemoveFile}
          />
        </div>

        <div className={styles.formActions}>
          <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
            {isSubmitting ? (
              <><Loader2 size={16} className="animate-spin" style={{ marginRight: '8px' }} /> Salvando...</>
            ) : (
              <><Save size={16} style={{ marginRight: '8px' }} /> Salvar Alterações</>
            )}
          </button>
          <button type="button" className={styles.cancelBtn} onClick={() => router.back()} disabled={isSubmitting}>
            <X size={16} style={{ marginRight: '8px' }} /> Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
