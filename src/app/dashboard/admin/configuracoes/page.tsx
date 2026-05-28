'use client';

import { useState } from 'react';
import { Save, Building2, Fingerprint, Phone, Link2, CheckCircle2, Loader2 } from 'lucide-react';
import { empresa } from '@/mock/data';
import styles from './page.module.scss';

export default function AdminConfigPage() {
  const [nome, setNome] = useState(empresa.name);
  const [numero, setNumero] = useState(empresa.number);
  const [cpfCnpj, setCpfCnpj] = useState(empresa.cpfCnpj);
  const [linkGrupo, setLinkGrupo] = useState(empresa.salesGroupLink || '');
  const [saving, setSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setShowSuccess(false);

    // Simula a requisição para salvar as configurações
    await new Promise(r => setTimeout(r, 1000));

    // Atualiza localmente os dados mockados para simular persistência em tela
    empresa.name = nome;
    empresa.number = numero;
    empresa.cpfCnpj = cpfCnpj;
    empresa.salesGroupLink = linkGrupo;

    setSaving(false);
    setShowSuccess(true);

    // Remove a mensagem de sucesso após 4 segundos
    setTimeout(() => {
      setShowSuccess(false);
    }, 4000);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Configurações</h1>
        <p className={styles.subtitle}>Gerencie os dados cadastrais da empresa e o canal de vendas principal.</p>
      </div>

      {showSuccess && (
        <div className={styles.alertSuccess} role="alert">
          <CheckCircle2 size={18} />
          <span>Configurações salvas com sucesso!</span>
        </div>
      )}

      <form className={styles.configCard} onSubmit={handleSave}>
        {/* Dados da Empresa */}
        <div className={styles.configSection}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.configTitle}>Dados da Empresa</h3>
            <p className={styles.configDesc}>Informações gerais de contato e identificação da sua loja.</p>
          </div>

          <div className={styles.formGrid}>
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label className={styles.label} htmlFor="empNome">
                <Building2 size={14} /> Nome da Empresa
              </label>
              <div className={styles.inputWrapper}>
                <input
                  id="empNome"
                  className={styles.input}
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                  placeholder="Ex: Minha Loja"
                  required
                />
                <Building2 className={styles.inputIcon} size={16} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="empCnpj">
                <Fingerprint size={14} /> CPF / CNPJ
              </label>
              <div className={styles.inputWrapper}>
                <input
                  id="empCnpj"
                  className={styles.input}
                  value={cpfCnpj}
                  onChange={e => setCpfCnpj(e.target.value)}
                  placeholder="00.000.000/0000-00"
                  required
                />
                <Fingerprint className={styles.inputIcon} size={16} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="empNumero">
                <Phone size={14} /> WhatsApp Comercial
              </label>
              <div className={styles.inputWrapper}>
                <input
                  id="empNumero"
                  className={styles.input}
                  value={numero}
                  onChange={e => setNumero(e.target.value)}
                  placeholder="Ex: 5511999999999"
                  required
                />
                <Phone className={styles.inputIcon} size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* Link Grupo de Venda */}
        <div className={styles.configSection}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.configTitle}>Link Grupo de Venda</h3>
            <p className={styles.configDesc}>O link do grupo de WhatsApp para o qual os clientes serão redirecionados.</p>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="linkGrupo">
              <Link2 size={14} /> URL do Grupo
            </label>
            <div className={styles.inputWrapper}>
              <input
                id="linkGrupo"
                className={styles.input}
                value={linkGrupo}
                onChange={e => setLinkGrupo(e.target.value)}
                placeholder="https://chat.whatsapp.com/..."
              />
              <Link2 className={styles.inputIcon} size={16} />
            </div>
          </div>
        </div>

        {/* Ações do Formulário */}
        <div className={styles.formActions}>
          <button type="submit" className={styles.submitBtn} disabled={saving}>
            {saving ? (
              <>
                <Loader2 size={16} className={styles.spinner} />
                <span>Salvando...</span>
              </>
            ) : (
              <>
                <Save size={16} />
                <span>Salvar Configurações</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
