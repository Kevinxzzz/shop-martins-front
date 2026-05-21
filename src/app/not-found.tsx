import Link from 'next/link';
import styles from './not-found.module.scss';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>Página não encontrada</h1>
        <p className={styles.text}>
          A página que você procura não existe ou foi removida.
        </p>
        <Link href="/" className={styles.button}>
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
