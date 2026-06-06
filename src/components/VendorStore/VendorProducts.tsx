import ProductCard from '@/components/ProductCard';
import type { Product } from '@/types';
import styles from './VendorStore.module.scss';

interface VendorProductsProps {
  vendorName: string;
  products: Product[];
}

export default function VendorProducts({ vendorName, products }: VendorProductsProps) {
  const firstName = vendorName.split(' ')[0];

  if (products.length === 0) {
    return null; // Don't show the section if no products yet
  }

  return (
    <section className={styles.products}>
      <h2 className={styles.sectionTitle}>
        Produtos de <span>{firstName}</span>
      </h2>
      <div className={styles.grid}>
        {products.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
    </section>
  );
}
