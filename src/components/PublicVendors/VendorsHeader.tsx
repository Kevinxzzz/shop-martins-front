import { Users } from 'lucide-react';
import styles from './PublicVendors.module.scss';

export default function VendorsHeader() {
  return (
    <div className={styles.header}>
      <div className={styles.headerIcon}>
        <Users size={24} />
      </div>
      <h1 className={styles.title}>Nossos <span>Vendedores</span></h1>
      <p className={styles.subtitle}>
        Conheça os vendedores da plataforma e explore seus produtos exclusivos.
      </p>
    </div>
  );
}
