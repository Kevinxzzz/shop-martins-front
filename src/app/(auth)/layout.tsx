import type { Metadata } from 'next';
import styles from './layout.module.scss';

export const metadata: Metadata = {
  title: 'Autenticação',
  description: 'Acesse sua conta ou crie uma nova no Shop Martins - Marketplace Esportivo Premium.',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.authRoot}>
      <div className={styles.gridTexture} aria-hidden="true" />
      <div className={styles.glowOrb} aria-hidden="true" />
      <div className={styles.glowOrbSecondary} aria-hidden="true" />
      {children}
    </div>
  );
}
