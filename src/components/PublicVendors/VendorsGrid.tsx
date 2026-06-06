import VendorCard from '@/components/VendorCard';
import type { PublicSeller } from '@/types';
import styles from './PublicVendors.module.scss';

interface VendorsGridProps {
  vendors: PublicSeller[];
}

export default function VendorsGrid({ vendors }: VendorsGridProps) {
  return (
    <div className={styles.grid}>
      {vendors.map((vendor) => (
        <VendorCard key={vendor.id} vendor={vendor} />
      ))}
    </div>
  );
}
