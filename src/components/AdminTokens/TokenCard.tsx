import { 
  Key, 
  Clock, 
  Link as LinkIcon, 
  Copy, 
  Check, 
  Ban, 
  Calendar 
} from 'lucide-react';
import type { Token } from '@/types';
import styles from './AdminTokens.module.scss';

interface TokenCardProps {
  token: Token;
  copiedKey: string | null;
  copyToClipboard: (text: string, key: string) => void;
  handleRevoke: (tokenId: string) => void;
  revokingId: string | null;
}

export default function TokenCard({
  token,
  copiedKey,
  copyToClipboard,
  handleRevoke,
  revokingId,
}: TokenCardProps) {
  const usagePercent = Math.min(((token._count?.usedBy || 0) / token.maxUses) * 100, 100);

  // Definição visual do status
  let statusClass = styles.active;
  let statusLabel = 'Ativo';

  if (token.status === 'EXPIRED') {
    statusClass = styles.expired;
    statusLabel = 'Expirado';
  } else if (token.status === 'CANCELED') {
    statusClass = styles.canceled;
    statusLabel = 'Revogado';
  } else if (token.status === 'MAXED_OUT') {
    statusClass = styles.maxedOut;
    statusLabel = 'Esgotado';
  }

  // Cores dinâmicas para a barra de progresso
  let progressColorClass = styles.success;
  if (token.status === 'CANCELED') progressColorClass = '';
  else if (usagePercent >= 100) progressColorClass = styles.danger;
  else if (usagePercent >= 80) progressColorClass = styles.warning;

  const formatDate = (iso: string) => {
    return new Date(iso).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className={styles.tokenCard}>
      {/* Cabeçalho do Card */}
      <div className={styles.cardHeader}>
        <div className={styles.cardTypeBadge}>
          <Key size={14} />
          <span>Convite Vendedor</span>
        </div>
        <span className={`${styles.statusBadge} ${statusClass}`}>
          {statusLabel}
        </span>
      </div>

      {/* Token Raw Box */}
      <div className={styles.tokenBox}>
        <span className={styles.fieldTitle}>Token Raw</span>
        <div className={styles.codeArea}>
          <span className={styles.codeText}>{token.token}</span>
          <button
            type="button"
            className={styles.copyBtn}
            onClick={() => copyToClipboard(token.token, `${token.id}-token`)}
            title="Copiar Token Raw"
            aria-label="Copiar token"
          >
            {copiedKey === `${token.id}-token` ? (
              <Check size={14} style={{ color: 'var(--color-success)' }} />
            ) : (
              <Copy size={14} />
            )}
          </button>
        </div>
      </div>

      {/* URL do Link de Convite Box */}
      <div className={styles.tokenBox}>
        <span className={styles.fieldTitle}>Link de Onboarding</span>
        <div className={styles.codeArea}>
          <span className={styles.codeText}>{token.inviteUrl}</span>
          <button
            type="button"
            className={styles.copyBtn}
            onClick={() => copyToClipboard(token.inviteUrl, `${token.id}-url`)}
            title="Copiar URL de Convite"
            aria-label="Copiar link"
          >
            {copiedKey === `${token.id}-url` ? (
              <Check size={14} style={{ color: 'var(--color-success)' }} />
            ) : (
              <LinkIcon size={14} />
            )}
          </button>
        </div>
      </div>

      {/* Progresso de Utilizações */}
      <div className={styles.usageContainer}>
        <div className={styles.usageHeader}>
          <span className={styles.usageLabel}>Cadastros Realizados</span>
          <span className={styles.usageValue}>
            {token._count?.usedBy || 0} / {token.maxUses}
          </span>
        </div>
        <div className={styles.progressTrack}>
          <div
            className={`${styles.progressFill} ${progressColorClass}`}
            style={{ width: `${token.status === 'CANCELED' ? 0 : usagePercent}%` }}
          />
        </div>
      </div>

      {/* Metadados / Datas */}
      <div className={styles.metaContainer}>
        <div className={styles.metaItem}>
          <Clock size={12} />
          <span>Criado em: {formatDate(token.createdAt)}</span>
        </div>
        <div className={styles.metaItem}>
          <Calendar size={12} />
          <span>Expira em: {formatDate(token.expiredAt)}</span>
        </div>
        {token.canceledAt && (
          <div className={styles.metaItem}>
            <Ban size={12} style={{ color: 'var(--color-danger)' }} />
            <span style={{ color: 'var(--color-danger)' }}>
              Revogado em: {formatDate(token.canceledAt)}
            </span>
          </div>
        )}
      </div>

      {/* Ações do Card */}
      {token.status === 'ACTIVE' && (
        <div className={styles.cardActions}>
          <button
            type="button"
            className={styles.revokeBtn}
            onClick={() => handleRevoke(token.id)}
            disabled={revokingId === token.id}
          >
            {revokingId === token.id ? 'Revogando...' : 'Revogar Convite'}
          </button>
        </div>
      )}
      {token.status !== 'ACTIVE' && (
        <div className={styles.cardActions}>
          <span className={styles.revokedBadgeText}>Inativo para novos cadastros</span>
        </div>
      )}
    </div>
  );
}
