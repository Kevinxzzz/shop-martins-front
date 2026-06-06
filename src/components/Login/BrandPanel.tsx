import { Sparkles, Zap, ShieldCheck } from 'lucide-react';
import styles from './Login.module.scss';

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
        <h1 className={styles.brandTitle}>A sua loja esportiva de alta performance.</h1>
        <div className={styles.featuresList}>
          <div className={`${styles.featureItem} stagger-1 animate-fade-in-up`}>
            <div className={styles.featureIcon}>
              <Zap size={18} />
            </div>
            <span>Encontre os melhores vendedores verificados.</span>
          </div>
          <div className={`${styles.featureItem} stagger-2 animate-fade-in-up`}>
            <div className={styles.featureIcon}>
              <ShieldCheck size={18} />
            </div>
            <span>Garantia de autenticidade em todos os produtos.</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
