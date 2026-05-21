'use client';

import { useEffect, useState } from 'react';
import { Key, Plus, Clock, Shield } from 'lucide-react';
import { getTokens, generateToken } from '@/mock/api';
import type { Token } from '@/types';
import styles from '../../shared.module.scss';

export default function AdminTokensPage() {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    getTokens().then(t => {
      setTokens(t);
      setLoading(false);
    });
  }, []);

  const handleGenerate = async () => {
    setGenerating(true);
    const newToken = await generateToken();
    setTokens(prev => [newToken, ...prev]);
    setGenerating(false);
  };

  const formatDate = (iso: string) => {
    return new Date(iso).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) return <div className={styles.loading}>Carregando...</div>;

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Tokens API</h1>
        <button className={styles.addBtn} onClick={handleGenerate} disabled={generating}>
          <Plus size={16} /> {generating ? 'Gerando...' : 'Gerar Token'}
        </button>
      </div>

      <div className={styles.tokenList}>
        {tokens.map(token => (
          <div key={token.id} className={styles.tokenCard}>
            <div style={{ color: 'var(--color-primary)' }}>
              <Key size={20} />
            </div>
            <div className={styles.tokenValue}>{token.token}</div>
            <div className={styles.tokenMeta}>
              <span><Clock size={12} style={{ display: 'inline', verticalAlign: 'middle' }} /> Criado: {formatDate(token.createdAt)}</span>
              <span><Shield size={12} style={{ display: 'inline', verticalAlign: 'middle' }} /> Expira: {formatDate(token.expiresAt)}</span>
            </div>
            <span className={`${styles.statusBadge} ${token.ativo ? styles.active : styles.inactive}`}>
              {token.ativo ? 'Ativo' : 'Expirado'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
