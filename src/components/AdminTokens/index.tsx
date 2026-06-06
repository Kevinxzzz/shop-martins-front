"use client";

import { useEffect, useState } from 'react';
import { Plus, Key } from 'lucide-react';
import { getTokens, generateToken, revokeToken } from '@/services/tokenService';
import type { Token } from '@/types';
import StatsPanel from './StatsPanel';
import TokenForm from './TokenForm';
import TokenCard from './TokenCard';
import styles from './AdminTokens.module.scss';

export default function AdminTokensContainer() {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [revokingId, setRevokingId] = useState<string | null>(null);

  // Controle do Formulário
  const [showForm, setShowForm] = useState(false);
  const [maxUses, setMaxUses] = useState(5);
  const [expiredAt, setExpiredAt] = useState('');

  // Controle de Feedback de Cópia
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Define data padrão de expiração (amanhã)
  const getTomorrowDateTimeLocal = () => {
    const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000);
    tomorrow.setMinutes(tomorrow.getMinutes() - tomorrow.getTimezoneOffset());
    return tomorrow.toISOString().slice(0, 16);
  };

  useEffect(() => {
    getTokens().then((t) => {
      setTokens(t);
      setLoading(false);
    });
    setExpiredAt(getTomorrowDateTimeLocal());
  }, []);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setGenerating(true);
    try {
      const newToken = await generateToken({
        maxUses,
        expiredAt: new Date(expiredAt).toISOString(),
      });
      setTokens((prev) => [newToken, ...prev]);
      setShowForm(false);
      // Reset form
      setMaxUses(5);
      setExpiredAt(getTomorrowDateTimeLocal());
    } catch (error) {
      console.error("Erro ao gerar token:", error);
    } finally {
      setGenerating(false);
    }
  };

  const handleRevoke = async (tokenId: string) => {
    if (
      !confirm(
        'Deseja realmente revogar este convite? Esta ação é irreversível e impedirá novos cadastros.'
      )
    ) {
      return;
    }

    setRevokingId(tokenId);
    try {
      await revokeToken(tokenId);
      // Atualiza o estado local para marcar como cancelado
      setTokens((prev) =>
        prev.map((t) =>
          t.id === tokenId
            ? {
                ...t,
                canceledAt: new Date().toISOString(),
                status: 'CANCELED' as const,
              }
            : t
        )
      );
    } catch (error) {
      console.error("Erro ao revogar token:", error);
    } finally {
      setRevokingId(null);
    }
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // Cálculos de Estatísticas
  const totalTokens = tokens.length;
  const activeTokens = tokens.filter((t) => t.status === 'ACTIVE').length;
  const totalRegistrations = tokens.reduce(
    (sum, t) => sum + (t._count?.usedBy || 0),
    0
  );

  if (loading) return <div className={styles.loading}>Carregando...</div>;

  return (
    <div className={styles.page}>
      {/* Cabeçalho */}
      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h1 className={styles.title}>Convites de Vendedores</h1>
          <p className={styles.subtitle}>
            Gere e gerencie os links de convite para onboarding de vendedores na sua empresa.
          </p>
        </div>
        {!showForm && (
          <button className={styles.addBtn} onClick={() => setShowForm(true)}>
            <Plus size={16} /> Novo Convite
          </button>
        )}
      </div>

      {/* Cards de Estatísticas */}
      <StatsPanel
        totalTokens={totalTokens}
        activeTokens={activeTokens}
        totalRegistrations={totalRegistrations}
      />

      {/* Formulário de Criação (Collapsible) */}
      {showForm && (
        <TokenForm
          onSubmit={handleGenerate}
          maxUses={maxUses}
          setMaxUses={setMaxUses}
          expiredAt={expiredAt}
          setExpiredAt={setExpiredAt}
          generating={generating}
          onClose={() => setShowForm(false)}
        />
      )}

      {/* Lista de Tokens em Cards Responsivos */}
      {tokens.length === 0 ? (
        <div className={styles.emptyState}>
          <div className={styles.statIcon}>
            <Key size={24} />
          </div>
          <span className={styles.emptyTitle}>Nenhum convite gerado</span>
          <p className={styles.emptyDesc}>
            Gere seu primeiro link de convite clicando no botão no topo da página.
          </p>
        </div>
      ) : (
        <div className={styles.tokensGrid}>
          {tokens.map((token) => (
            <TokenCard
              key={token.id}
              token={token}
              copiedKey={copiedKey}
              copyToClipboard={copyToClipboard}
              handleRevoke={handleRevoke}
              revokingId={revokingId}
            />
          ))}
        </div>
      )}
    </div>
  );
}
