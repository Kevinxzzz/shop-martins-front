import { Loader2 } from "lucide-react";
import Image from "next/image";
import styles from "./FullScreenLoader.module.scss";

interface FullScreenLoaderProps {
  message?: string;
}

export function FullScreenLoader({
  message,
}: FullScreenLoaderProps) {
  return (
    <div className={styles.container}>
      <div className={styles.brand}>
        <div className={styles.logoContainer}>
          <Image
            src="/logo-branco-BlueFoot.png"
            alt="BlueFoot Logo"
            width={64}
            height={64}
            className={`${styles.logoImg} ${styles.logoWhite}`}
            priority
          />
          <Image
            src="/logo-preto-Bluefoot.png"
            alt="BlueFoot Logo"
            width={64}
            height={64}
            className={`${styles.logoImg} ${styles.logoBlack}`}
            priority
          />
        </div>
        <span className={styles.title}>
          <strong>BLUE</strong>FOOT
        </span>
      </div>
      <Loader2 className={styles.spinner} size={40} />
      {message && <p className={styles.text}>{message}</p>}
    </div>
  );
}
