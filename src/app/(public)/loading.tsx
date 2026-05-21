import { ProductCardSkeleton } from '@/components/SkeletonLoader';
import styles from './page.module.scss';

export default function HomeLoading() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroBadge} style={{ opacity: 0.5 }}>Carregando...</div>
          <h1 className={styles.heroTitle}>Tudo para o esporte em um só lugar</h1>
        </div>
      </section>
      <section className={styles.main}>
        <div className={styles.layout}>
          <div className={styles.content}>
            <div className={styles.loadingGrid}>
              {Array.from({ length: 8 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
