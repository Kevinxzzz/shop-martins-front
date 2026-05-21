'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye } from 'lucide-react';
import { getProducts } from '@/mock/api';
import { formatPrice } from '@/utils';
import type { Produto } from '@/types';
import styles from '../../shared.module.scss';

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts({ limit: 200 }).then(res => {
      setProducts(res.products);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className={styles.loading}>Carregando...</div>;

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Todos os Produtos</h1>
        <span style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--fs-sm)' }}>
          {products.length} produtos
        </span>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Vendedor</th>
              <th>Categoria</th>
              <th>Preço</th>
              <th>Views</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.slice(0, 50).map(p => (
              <tr key={p.id}>
                <td>
                  <div className={styles.productRow}>
                    <Image
                      src={p.midias[0]?.url_arquivo || ''}
                      alt={p.titulo}
                      width={36}
                      height={36}
                      className={styles.productThumb}
                      unoptimized
                    />
                    <span className={styles.productTitle}>{p.titulo}</span>
                  </div>
                </td>
                <td>{p.vendedor?.nome}</td>
                <td><span className={styles.badge}>{p.categoria?.nome}</span></td>
                <td><span className={styles.price}>{formatPrice(p.preco)}</span></td>
                <td>{p.countViews}</td>
                <td>
                  <Link href={`/produto/${p.id}`} className={styles.actionBtn}><Eye size={16} /></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
