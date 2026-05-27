import { X } from 'lucide-react';
import styles from './AdminTokens.module.scss';

interface TokenFormProps {
  onSubmit: (e: React.FormEvent) => void;
  maxUses: number;
  setMaxUses: (val: number) => void;
  expiredAt: string;
  setExpiredAt: (val: string) => void;
  generating: boolean;
  onClose: () => void;
}

export default function TokenForm({
  onSubmit,
  maxUses,
  setMaxUses,
  expiredAt,
  setExpiredAt,
  generating,
  onClose,
}: TokenFormProps) {
  return (
    <form onSubmit={onSubmit} className={styles.formCard}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>Configurar Novo Convite</h2>
        <button
          type="button"
          className={styles.closeFormBtn}
          onClick={onClose}
          aria-label="Fechar formulário"
        >
          <X size={16} />
        </button>
      </div>

      <div className={styles.formGrid}>
        <div className={styles.formGroup}>
          <label htmlFor="maxUses" className={styles.label}>
            Limite de Utilizações (Cadastros)
          </label>
          <input
            id="maxUses"
            type="number"
            min="1"
            max="100"
            className={styles.input}
            value={maxUses}
            onChange={(e) => setMaxUses(parseInt(e.target.value, 10) || 1)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="expiredAt" className={styles.label}>
            Data e Hora de Expiração
          </label>
          <input
            id="expiredAt"
            type="datetime-local"
            className={styles.input}
            value={expiredAt}
            onChange={(e) => setExpiredAt(e.target.value)}
            required
          />
        </div>
      </div>

      <div className={styles.formActions}>
        <button
          type="button"
          className={styles.cancelBtn}
          onClick={onClose}
          disabled={generating}
        >
          Cancelar
        </button>
        <button type="submit" className={styles.submitBtn} disabled={generating}>
          {generating ? 'Gerando...' : 'Gerar Convite'}
        </button>
      </div>
    </form>
  );
}
