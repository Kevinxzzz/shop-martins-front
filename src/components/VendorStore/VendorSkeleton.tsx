import styles from './VendorStore.module.scss';

export default function VendorSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.loading}>Carregando...</div>
    </div>
  );
}
