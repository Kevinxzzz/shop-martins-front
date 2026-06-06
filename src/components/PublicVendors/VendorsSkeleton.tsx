import styles from './PublicVendors.module.scss';

interface VendorsSkeletonProps {
  count?: number;
}

export default function VendorsSkeleton({ count = 6 }: VendorsSkeletonProps) {
  return (
    <div className={styles.grid}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={styles.skeletonCard} />
      ))}
    </div>
  );
}
