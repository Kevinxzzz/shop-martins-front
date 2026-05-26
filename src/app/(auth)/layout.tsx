import type { Metadata } from 'next';
import { PublicRoute } from '@/components/auth/PublicRoute';
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
    <PublicRoute>
      <div className={styles.authRoot}>
        <div className={styles.gridTexture} aria-hidden="true" />
        <div className={styles.glowOrb} aria-hidden="true" />
        <div className={styles.glowOrbSecondary} aria-hidden="true" />
        {children}
      </div>
    </PublicRoute>
  );
}
