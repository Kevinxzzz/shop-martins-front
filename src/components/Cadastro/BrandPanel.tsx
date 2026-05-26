import { Sparkles, Zap, ShieldCheck } from 'lucide-react';
import styles from './Cadastro.module.scss';

export default function BrandPanel() {
  return (
    <aside className={styles.brandPanel}>
      <div>
        <div className={styles.brandLogo}>
          <Sparkles className={styles.brandLogoIcon} size={28} />
          <span>MartinsVendas</span>
        </div>
      </div>

      <div className={styles.brandContent}>
        <h1 className={styles.brandTitle}>Faça parte da nossa equipe.</h1>
        <div className={styles.featuresList}>
          <div className={`${styles.featureItem} stagger-1 animate-fade-in-up`}>
            <div className={styles.featureIcon}>
              <Zap size={18} />
            </div>
            <span>Sistema rápido e integrado.</span>
          </div>
          <div className={`${styles.featureItem} stagger-2 animate-fade-in-up`}>
            <div className={styles.featureIcon}>
              <ShieldCheck size={18} />
            </div>
            <span>Proteção e suporte dedicado aos parceiros.</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
