import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIcon}>S</div>
              <div className={styles.logoText}>Shop<span>Martins</span></div>
            </Link>
            <p className={styles.brandDesc}>
              Marketplace esportivo premium. Encontre os melhores produtos esportivos 
              dos melhores vendedores, tudo em um só lugar.
            </p>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Navegação</h4>
            <Link href="/" className={styles.columnLink}>Início</Link>
            <Link href="/vendedores" className={styles.columnLink}>Vendedores</Link>
            <Link href="/?categoria=cat-001" className={styles.columnLink}>Chuteiras</Link>
            <Link href="/?categoria=cat-002" className={styles.columnLink}>Camisas</Link>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Categorias</h4>
            <Link href="/?categoria=cat-005" className={styles.columnLink}>Bolas</Link>
            <Link href="/?categoria=cat-006" className={styles.columnLink}>Luvas</Link>
            <Link href="/?categoria=cat-009" className={styles.columnLink}>Acessórios</Link>
            <Link href="/?categoria=cat-010" className={styles.columnLink}>Agasalhos</Link>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Suporte</h4>
            <Link href="/vendedores" className={styles.columnLink}>Fale Conosco</Link>
            <Link href="/dashboard" className={styles.columnLink}>Área do Vendedor</Link>
            <Link href="/" className={styles.columnLink}>FAQ</Link>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Shop Martins. Todos os direitos reservados.
        </p>
        <div className={styles.bottomLinks}>
          <Link href="/" className={styles.bottomLink}>Termos de Uso</Link>
          <Link href="/" className={styles.bottomLink}>Privacidade</Link>
        </div>
      </div>
    </footer>
  );
}
