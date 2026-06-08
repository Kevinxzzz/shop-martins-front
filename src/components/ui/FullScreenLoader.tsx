import { Loader2, Sparkles } from "lucide-react";
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
        <Sparkles className={styles.icon} size={32} />
        <span className={styles.title}>BlueFoot </span>
      </div>
      <Loader2 className={styles.spinner} size={40} />
      {message && <p className={styles.text}>{message}</p>}
    </div>
  );
}
