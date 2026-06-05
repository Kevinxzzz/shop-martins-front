'use client';

import Link from 'next/link';
import { ChevronRight, ArrowLeft, Loader2 } from 'lucide-react';
import ProductCarousel from '@/components/ProductCarousel';
import { useProductDetail } from '@/hooks/products/useProductDetail';
import { ProductDetails } from './ProductDetails';
import { SellerInfo } from './SellerInfo';
import type { Media } from '@/types';
import styles from './PublicProductContainer.module.scss';

interface PublicProductContainerProps {
  productId: string;
}

export default function PublicProductContainer({ productId }: PublicProductContainerProps) {
  const { data: product, isLoading, isError, error } = useProductDetail(productId);

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <Loader2 size={32} style={{ animation: 'spin 1s linear infinite' }} />
        <div>Carregando...</div>
      </div>
    );
  }

  if (isError) {
    const status = (error as any)?.response?.status;
    if (status === 404) {
      return (
        <div className={styles.emptyContainer}>
          <h2>Produto não encontrado</h2>
          <Link href="/" className={styles.backBtn}>
            <ArrowLeft size={16} /> Voltar
          </Link>
        </div>
      );
    }
    return (
      <div className={styles.emptyContainer}>
        <h2>Erro ao carregar produto</h2>
        <Link href="/" className={styles.backBtn}>
          <ArrowLeft size={16} /> Voltar
        </Link>
      </div>
    );
  }

  if (!product) {
    return (
      <div className={styles.emptyContainer}>
        <h2>Produto não encontrado</h2>
        <Link href="/" className={styles.backBtn}>
          <ArrowLeft size={16} /> Voltar
        </Link>
      </div>
    );
  }

  // Ordenação das mídias: [Imagem Principal ou Primeira Imagem] -> [Outras Imagens] -> [Vídeos]
  const rawMedia = [...product.media];

  let mainMediaIndex = rawMedia.findIndex(m => m.isMain);
  if (mainMediaIndex === -1 && rawMedia.length > 0) {
    mainMediaIndex = 0; // Fallback para a primeira imagem
  }

  const mainMedia = mainMediaIndex !== -1 ? rawMedia.splice(mainMediaIndex, 1)[0] : null;

  const otherPhotos = rawMedia.filter(m => m.type !== 'VIDEO');
  const videos = rawMedia.filter(m => m.type === 'VIDEO');

  const orderedMedia = [];
  if (mainMedia) orderedMedia.push(mainMedia);
  orderedMedia.push(...otherPhotos);
  orderedMedia.push(...videos);

  const mappedMedia: Media[] = orderedMedia.map(m => ({
    id: m.id,
    fileUrl: m.url,
    type: (m.type === 'FOTO' || (m.type as any) === 'image') ? 'image' : 'video',
    order: m.order,
    productId: product.id,
  }));

  return (
    <div className={styles.pageContainer}>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs} aria-label="Navegação">
        <Link href="/">Início</Link>
        <ChevronRight size={14} aria-hidden="true" />
        {product.categories && product.categories.length > 0 && (
          <>
            <Link href={`/?category=${product.categories[0].category.id}`}>{product.categories[0].category.name}</Link>
            <ChevronRight size={14} aria-hidden="true" />
          </>
        )}
        <span>{product.name}</span>
      </nav>

      <div className={styles.layout}>
        {/* Carousel */}
        <div className={styles.galleryColumn}>
          <ProductCarousel media={mappedMedia} title={product.name} />
        </div>

        {/* Details & Seller Info */}
        <div className={styles.detailsColumn}>
          <ProductDetails product={product} />
          <SellerInfo seller={product.user} />
        </div>
      </div>
    </div>
  );
}
