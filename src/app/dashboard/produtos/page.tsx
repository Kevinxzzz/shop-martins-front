'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Plus, Eye, Pencil, Trash2 } from 'lucide-react';
import ModalConfirm from '@/components/ModalConfirm';
import { getProducts } from '@/mock/api';
import { formatPrice } from '@/utils';
import type { Produto } from '@/types';
import styles from '../shared.module.scss';

export default function DashboardProductsPage() {
  const [products, setProducts] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    getProducts({ vendedorId: 'ven-001', limit: 100 }).then(res => {
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

  if (loading) return <div className={styles.loading}>Carregando...</div>;

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Meus Produtos</h1>
        <Link href="/dashboard/produtos/novo" className={styles.addBtn}>
          <Plus size={16} /> Novo Produto
        </Link>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Categoria</th>
              <th>Preço</th>
              <th>Views</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>
                  <div className={styles.productRow}>
                    <Image
                      src={product.midias[0]?.url_arquivo || ''}
                      alt={product.titulo}
                      width={44}
                      height={44}
                      className={styles.productThumb}
                      unoptimized
                    />
                    <span className={styles.productTitle}>{product.titulo}</span>
                  </div>
                </td>
                <td><span className={styles.badge}>{product.categoria?.nome}</span></td>
                <td><span className={styles.price}>{formatPrice(product.preco)}</span></td>
                <td>{product.countViews}</td>
                <td>
                  <div className={styles.actionBtns}>
                    <Link href={`/produto/${product.id}`} className={styles.actionBtn} title="Ver">
                      <Eye size={16} />
                    </Link>
                    <Link href={`/dashboard/produtos/${product.id}/editar`} className={styles.actionBtn} title="Editar">
                      <Pencil size={16} />
                    </Link>
                    <button
                      className={`${styles.actionBtn} ${styles.danger}`}
                      onClick={() => setDeleteId(product.id)}
                      title="Excluir"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
