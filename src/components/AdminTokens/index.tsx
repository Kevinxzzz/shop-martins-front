"use client";

import { useEffect, useState } from 'react';
import { Plus, Key } from 'lucide-react';
import { useTokens } from '@/hooks/tokens/useTokens';
import { useGenerateToken } from '@/hooks/tokens/useGenerateToken';
import { useRevokeToken } from '@/hooks/tokens/useRevokeToken';
import type { Token } from '@/types';
import StatsPanel from './StatsPanel';
import TokenForm from './TokenForm';
import TokenCard from './TokenCard';
import styles from './AdminTokens.module.scss';

export default function AdminTokensContainer() {
  const { data: tokens = [], isLoading, isError } = useTokens();
  const generateMutation = useGenerateToken();
  const revokeMutation = useRevokeToken();

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
    setExpiredAt(getTomorrowDateTimeLocal());
  }, []);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await generateMutation.mutateAsync({
        maxUses,
        expiredAt: new Date(expiredAt).toISOString(),
      });
      setShowForm(false);
      // Reset form
      setMaxUses(5);
      setExpiredAt(getTomorrowDateTimeLocal());
    } catch (error) {
      console.error("Erro ao gerar token:", error);
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

    try {
      await revokeMutation.mutateAsync(tokenId);
    } catch (error) {
      console.error("Erro ao revogar token:", error);
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

  if (isLoading) return <div className={styles.loading}>Carregando...</div>;

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
          generating={generateMutation.isPending}
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
              revokingId={revokeMutation.isPending ? (revokeMutation.variables ?? null) : null}
            />
          ))}
        </div>
      )}
    </div>
  );
}
