import { Sparkles, Zap, ShieldCheck } from 'lucide-react';
import styles from './CadastroEmpresa.module.scss';

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
        <h1 className={styles.brandTitle}>Cadastre sua empresa e inicie sua jornada.</h1>
        <div className={styles.featuresList}>
          <div className={`${styles.featureItem} stagger-1 animate-fade-in-up`}>
            <div className={styles.featureIcon}>
              <Zap size={18} />
            </div>
            <span>Plataforma rápida, moderna e integrada.</span>
          </div>
          <div className={`${styles.featureItem} stagger-2 animate-fade-in-up`}>
            <div className={styles.featureIcon}>
              <ShieldCheck size={18} />
            </div>
            <span>Controle completo de produtos e equipe de vendas.</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
