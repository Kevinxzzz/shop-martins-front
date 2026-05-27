import { Activity, Shield, Users } from 'lucide-react';
import styles from './AdminTokens.module.scss';

interface StatsPanelProps {
  totalTokens: number;
  activeTokens: number;
  totalRegistrations: number;
}

export default function StatsPanel({
  totalTokens,
  activeTokens,
  totalRegistrations,
}: StatsPanelProps) {
  return (
    <div className={styles.statsGrid}>
      <div className={styles.statCard}>
        <div className={styles.statIcon}>
          <Activity size={20} />
        </div>
        <div className={styles.statContent}>
          <span className={styles.statValue}>{totalTokens}</span>
          <span className={styles.statLabel}>Total de Links</span>
        </div>
      </div>

      <div className={styles.statCard}>
        <div className={styles.statIcon + ' ' + styles.success}>
          <Shield size={20} />
        </div>
        <div className={styles.statContent}>
          <span className={styles.statValue}>{activeTokens}</span>
          <span className={styles.statLabel}>Links Ativos</span>
        </div>
      </div>

      <div className={styles.statCard}>
        <div className={styles.statIcon + ' ' + styles.warning}>
          <Users size={20} />
        </div>
        <div className={styles.statContent}>
          <span className={styles.statValue}>{totalRegistrations}</span>
          <span className={styles.statLabel}>Cadastros Realizados</span>
        </div>
      </div>
    </div>
  );
}
