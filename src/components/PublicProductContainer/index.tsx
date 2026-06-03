'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import ProductCarousel from '@/components/ProductCarousel';
import ProductCard from '@/components/ProductCard';
import { getProductById, getRelatedProducts } from '@/mock/api';
import { ProductDetails } from './ProductDetails';
import { SellerInfo } from './SellerInfo';
import type { Product } from '@/types';
import styles from './PublicProductContainer.module.scss';

interface PublicProductContainerProps {
  productId: string;
}

export default function PublicProductContainer({ productId }: PublicProductContainerProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(productId).then(p => {
      setProduct(p);
      setLoading(false);
      if (p) {
        getRelatedProducts(p.categoryId, p.id).then(setRelated);
      }
    });
  }, [productId]);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div>Carregando...</div>
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

  return (
    <div className={styles.pageContainer}>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs} aria-label="Navegação">
        <Link href="/">Início</Link>
        <ChevronRight size={14} aria-hidden="true" />
        {product.category && (
          <>
            <Link href={`/?category=${product.categoryId}`}>{product.category.name}</Link>
            <ChevronRight size={14} aria-hidden="true" />
          </>
        )}
        <span>{product.title}</span>
      </nav>

      <div className={styles.layout}>
        {/* Carousel */}
        <div className={styles.galleryColumn}>
          <ProductCarousel media={product.media} title={product.title} />
        </div>

        {/* Details & Seller Info */}
        <div className={styles.detailsColumn}>
          <ProductDetails product={product} />
          <SellerInfo seller={product.seller} />
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className={styles.relatedSection}>
          <h2 className={styles.relatedTitle}>
            Produtos <span>relacionados</span>
          </h2>
          <div className={styles.relatedGrid}>
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
