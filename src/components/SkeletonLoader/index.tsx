import { cn } from '@/utils';
import styles from './SkeletonLoader.module.scss';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  variant?: 'text' | 'heading' | 'avatar' | 'image' | 'card' | 'button';
  className?: string;
}

export default function SkeletonLoader({
  width = '100%',
  height,
  variant = 'text',
  className,
}: SkeletonProps) {
  return (
    <div
      className={cn(styles.skeleton, styles[variant], className)}
      style={{ width, height }}
      aria-hidden="true"
    />
  );
}

export function ProductCardSkeleton() {
  return (
    <div className={styles.productCardSkeleton}>
      <div className={styles.productImageSkeleton} />
      <div className={styles.productContentSkeleton}>
        <SkeletonLoader variant="text" width="85%" height={14} />
        <SkeletonLoader variant="text" width="60%" height={14} />
        <SkeletonLoader variant="heading" width="40%" height={24} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
          <SkeletonLoader variant="avatar" width={24} height={24} />
          <SkeletonLoader variant="text" width={100} height={12} />
        </div>
      </div>
    </div>
  );
}
