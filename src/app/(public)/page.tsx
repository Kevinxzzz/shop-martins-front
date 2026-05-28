'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShoppingBag, SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { ProductCardSkeleton } from '@/components/SkeletonLoader';
import FilterModal from '@/components/FilterModal';
import { getProducts } from '@/mock/api';
import type { Product } from '@/types';
import styles from './page.module.scss';

function HomeContent() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState<{
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    search?: string;
  }>({});

  const categoryParam = searchParams.get('category');
  const searchParam = searchParams.get('search');

  useEffect(() => {
    setFilters(prev => ({
      ...prev,
      category: categoryParam || undefined,
      search: searchParam || undefined,
    }));
  }, [categoryParam, searchParam]);

  useEffect(() => {
    setLoading(true);
    getProducts({ ...filters, limit: 60 }).then(res => {
      setProducts(res.products);
      setTotal(res.total);
      setLoading(false);
    });
  }, [filters]);

  const handleFilter = (newFilters: { category?: string; minPrice?: number; maxPrice?: number }) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const activeFilterCount = [filters.category, filters.minPrice, filters.maxPrice].filter(Boolean).length;

  return (
    <>
      {/* Banner */}
      <section className={styles.banner}>
        <Image
          src="/banner-martins.png"
          alt="Martins Vendas — Marketplace Esportivo Premium"
          width={1440}
          height={400}
          className={styles.bannerImage}
          priority
          unoptimized
        />
      </section>

      {/* Products Section */}
      <section id="produtos" className={styles.main}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionLeft}>
            <h2 className={styles.sectionTitle}>Produtos</h2>
            {!loading && (
              <span className={styles.resultCount}>{total} encontrados</span>
            )}
          </div>
          <button
            className={styles.filterBtn}
            onClick={() => setFilterOpen(true)}
            aria-label="Abrir filtros"
          >
            <SlidersHorizontal size={16} />
            Filtros
            {activeFilterCount > 0 && (
              <span className={styles.filterBadge}>{activeFilterCount}</span>
            )}
          </button>
        </div>

        {/* Active Filter Tags */}
        {filters.category && (
          <div className={styles.activeTags}>
            <button
              className={styles.activeTag}
              onClick={() => setFilters(prev => ({ ...prev, category: undefined }))}
            >
              Categoria ativa <X size={12} />
            </button>
          </div>
        )}

        {loading ? (
          <div className={styles.grid}>
            {Array.from({ length: 12 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        ) : products.length > 0 ? (
          <div className={styles.grid}>
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <ShoppingBag size={40} />
            <p>Nenhum produto encontrado</p>
          </div>
        )}
      </section>

      {/* Sell CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Deseja vender seus produtos?</h2>
          <p className={styles.ctaText}>
            Entre no nosso grupo de vendas e comece a anunciar.
          </p>
          <a
            href="https://chat.whatsapp.com/abc123grupo"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            Quero vender <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Filter Modal */}
      <FilterModal
        isOpen={filterOpen}
        onClose={() => setFilterOpen(false)}
        selectedCategory={filters.category}
        minPrice={filters.minPrice}
        maxPrice={filters.maxPrice}
        onFilter={(f) => {
          handleFilter(f);
          setFilterOpen(false);
        }}
      />
    </>
  );
}

export default function HomePage() {
  return (
    <Suspense>
      <HomeContent />
    </Suspense>
  );
}
