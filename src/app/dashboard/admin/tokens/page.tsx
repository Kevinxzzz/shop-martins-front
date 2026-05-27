'use client';

import { useEffect, useState } from 'react';
import { 
  Key, 
  Plus, 
  Clock, 
  Shield, 
  Link as LinkIcon, 
  Copy, 
  Check, 
  Ban, 
  Users, 
  X,
  Activity,
  Calendar
} from 'lucide-react';
import { getTokens, generateToken, revokeToken } from '@/services/tokenService';
import type { Token } from '@/types';
import styles from './tokens.module.scss';

export default function AdminTokensPage() {
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
    getTokens().then(t => {
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
        expiredAt: new Date(expiredAt).toISOString()
      });
      setTokens(prev => [newToken, ...prev]);
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
    if (!confirm('Deseja realmente revogar este convite? Esta ação é irreversível e impedirá novos cadastros.')) {
      return;
    }
    
    setRevokingId(tokenId);
    try {
      await revokeToken(tokenId);
      // Atualiza o estado local para marcar como cancelado
      setTokens(prev => 
        prev.map(t => 
          t.id === tokenId 
            ? { ...t, canceledAt: new Date().toISOString(), status: 'CANCELED' as const } 
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

  const formatDate = (iso: string) => {
    return new Date(iso).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Cálculos de Estatísticas
  const totalTokens = tokens.length;
  const activeTokens = tokens.filter(t => t.status === 'ACTIVE').length;
  const totalRegistrations = tokens.reduce((sum, t) => sum + (t._count?.usedBy || 0), 0);

  if (loading) return <div className={styles.loading}>Carregando...</div>;

  return (
    <div className={styles.page}>
      {/* Cabeçalho */}
      <div className={styles.header}>
        <div className={styles.titleArea}>
          <h1 className={styles.title}>Convites de Vendedores</h1>
          <p className={styles.subtitle}>Gere e gerencie os links de convite para onboarding de vendedores na sua empresa.</p>
        </div>
        {!showForm && (
          <button className={styles.addBtn} onClick={() => setShowForm(true)}>
            <Plus size={16} /> Novo Convite
          </button>
        )}
      </div>

      {/* Cards de Estatísticas */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <Activity size={20} />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statValue}>{totalTokens}</span>
            <span className={styles.statLabel}>Total de Links</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon + ' ' + styles.success}>
            <Shield size={20} />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statValue}>{activeTokens}</span>
            <span className={styles.statLabel}>Links Ativos</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon + ' ' + styles.warning}>
            <Users size={20} />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statValue}>{totalRegistrations}</span>
            <span className={styles.statLabel}>Cadastros Realizados</span>
          </div>
        </div>
      </div>

      {/* Formulário de Criação (Collapsible) */}
      {showForm && (
        <form onSubmit={handleGenerate} className={styles.formCard}>
          <div className={styles.formHeader}>
            <h2 className={styles.formTitle}>Configurar Novo Convite</h2>
            <button 
              type="button" 
              className={styles.closeFormBtn} 
              onClick={() => setShowForm(false)}
              aria-label="Fechar formulário"
            >
              <X size={16} />
            </button>
          </div>
          
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label htmlFor="maxUses" className={styles.label}>Limite de Utilizações (Cadastros)</label>
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
              <label htmlFor="expiredAt" className={styles.label}>Data e Hora de Expiração</label>
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
              onClick={() => setShowForm(false)}
              disabled={generating}
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              className={styles.submitBtn} 
              disabled={generating}
            >
              {generating ? 'Gerando...' : 'Gerar Convite'}
            </button>
          </div>
        </form>
      )}

      {/* Lista de Tokens em Cards Responsivos */}
      {tokens.length === 0 ? (
        <div className={styles.emptyState}>
          <div className={styles.statIcon}>
            <Key size={24} />
          </div>
          <span className={styles.emptyTitle}>Nenhum convite gerado</span>
          <p className={styles.emptyDesc}>Gere seu primeiro link de convite clicando no botão no topo da página.</p>
        </div>
      ) : (
        <div className={styles.tokensGrid}>
          {tokens.map(token => {
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

            return (
              <div key={token.id} className={styles.tokenCard}>
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
                      {copiedKey === `${token.id}-token` ? <Check size={14} style={{ color: 'var(--color-success)' }} /> : <Copy size={14} />}
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
                      {copiedKey === `${token.id}-url` ? <Check size={14} style={{ color: 'var(--color-success)' }} /> : <LinkIcon size={14} />}
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
          })}
        </div>
      )}
    </div>
  );
}
