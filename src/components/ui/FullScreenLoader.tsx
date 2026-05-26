import { Loader2, Sparkles } from 'lucide-react';
import styles from './FullScreenLoader.module.scss';

export function FullScreenLoader() {
  return (
    <div className={styles.container}>
      <div className={styles.brand}>
        <Sparkles className={styles.icon} size={32} />
        <span className={styles.title}>Shop Martins</span>
      </div>
      <Loader2 className={styles.spinner} size={40} />
      <p className={styles.text}>Carregando sua sessão...</p>
    </div>
  );
}
