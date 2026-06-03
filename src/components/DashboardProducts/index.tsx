'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, PackageOpen } from 'lucide-react';
import ModalConfirm from '@/components/ModalConfirm';
import { getProducts } from '@/mock/api';
import type { Product } from '@/types';
import { ProductListItem } from './ProductListItem';
import styles from './styles.module.scss';

export default function DashboardProductsContainer() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    // Simulando fetch de produtos com o seller mockado (seguindo o padrão atual)
    getProducts({ sellerId: 'ven-001', limit: 100 }).then(res => {
      setProducts(res.products);
      setLoading(false);
    });
  }, []);

  const handleDelete = () => {
    if (deleteId) {
      setProducts(prev => prev.filter(p => p.id !== deleteId));
      setDeleteId(null);
    }
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className="animate-pulse flex flex-col items-center gap-2">
          <div className="h-8 w-8 rounded-full border-4 border-primary border-t-transparent animate-spin" />
          <span>Carregando produtos...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Meus Produtos</h1>
        <Link href="/dashboard/produtos/novo" className={styles.addBtn}>
          <Plus size={18} /> Novo Produto
        </Link>
      </header>

      {products.length === 0 ? (
        <div className={styles.emptyState}>
          <PackageOpen size={48} style={{ margin: "0 auto", marginBottom: "1rem", color: "var(--color-text-tertiary)" }} />
          <h3 style={{ fontSize: "1.125rem", fontWeight: 500, color: "var(--color-text)", marginBottom: "0.25rem" }}>
            Nenhum produto encontrado
          </h3>
          <p style={{ color: "var(--color-text-secondary)" }}>
            Você ainda não cadastrou nenhum produto. Clique no botão acima para começar.
          </p>
        </div>
      ) : (
        <div className={styles.grid}>
          {products.map(product => (
            <ProductListItem 
              key={product.id} 
              product={product} 
              onDelete={setDeleteId} 
            />
          ))}
        </div>
      )}

      <ModalConfirm
        isOpen={!!deleteId}
        title="Excluir produto"
        message="Tem certeza que deseja excluir este produto? Essa ação não pode ser desfeita."
        confirmText="Excluir"
        variant="danger"
        onConfirm={handleDelete}
        onCancel={() => setDeleteId(null)}
      />
    </div>
  );
}
