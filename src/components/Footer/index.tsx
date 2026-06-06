import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIcon}>S</div>
              <div className={styles.logoText}>
                Shop<span>Martins</span>
              </div>
            </Link>
            <p className={styles.brandDesc}>
              A maior comunidade de contas de eFootball. Encontre contas premium com
              elencos lendários, jogadores épicos, forças de equipe de elite e
              segurança garantida.
            </p>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Navegação</h4>
            <Link href="/" className={styles.columnLink}>
              Início
            </Link>
            <Link href="/vendedores" className={styles.columnLink}>
              Vendedores
            </Link>
            {/* <Link href="/?categoria=cat-002" className={styles.columnLink}>
              Contas Over 3200
            </Link>
            <Link href="/?categoria=cat-001" className={styles.columnLink}>
              Contas com Neymar
            </Link> */}
          </div>
{/* 
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Destaques</h4>
            <Link href="/?q=big-time" className={styles.columnLink}>
              Cartas Big Time
            </Link>
            <Link href="/?q=show-time" className={styles.columnLink}>
              Cartas Show Time
            </Link>
            <Link href="/?q=epic" className={styles.columnLink}>
              Jogadores Épicos
            </Link>
            <Link href="/?q=coins" className={styles.columnLink}>
              Contas com Coins
            </Link>
          </div> */}
{/* 
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Suporte</h4>
            <Link href="/dashboard" className={styles.columnLink}>
              Área do Vendedor
            </Link>
            <Link href="/entrar" className={styles.columnLink}>
              Acessar Conta
            </Link>
          </div> */}
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Shop Martins. Todos os direitos
          reservados.
        </p>
        <div className={styles.bottomLinks}>
          <Link href="/" className={styles.bottomLink}>
            Termos de Uso
          </Link>
          <Link href="/" className={styles.bottomLink}>
            Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
