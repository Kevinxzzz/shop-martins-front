'use client';

import { useState } from 'react';
import { Save } from 'lucide-react';
import { empresa } from '@/mock/data';
import styles from '../../shared.module.scss';

export default function AdminConfigPage() {
  const [nome, setNome] = useState(empresa.name);
  const [numero, setNumero] = useState(empresa.number);
  const [cpfCnpj, setCpfCnpj] = useState(empresa.cpfCnpj);
  const [linkGrupo, setLinkGrupo] = useState(empresa.salesGroupLink || '');
  const [saving, setSaving] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await new Promise(r => setTimeout(r, 800));
    setSaving(false);
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Configurações</h1>
      </div>

      <form className={styles.configCard} onSubmit={handleSave}>
        <div className={styles.configSection}>
          <h3 className={styles.configTitle}>Dados da Empresa</h3>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="empNome">Nome da Empresa</label>
              <input id="empNome" className={styles.input} value={nome} onChange={e => setNome(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="empCnpj">CPF/CNPJ</label>
              <input id="empCnpj" className={styles.input} value={cpfCnpj} onChange={e => setCpfCnpj(e.target.value)} />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="empNumero">Número WhatsApp</label>
              <input id="empNumero" className={styles.input} value={numero} onChange={e => setNumero(e.target.value)} />
            </div>
          </div>
        </div>

        <div className={styles.configSection}>
          <h3 className={styles.configTitle}>Link Grupo de Venda</h3>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="linkGrupo">URL do grupo WhatsApp</label>
            <input
              id="linkGrupo"
              className={styles.input}
              value={linkGrupo}
              onChange={e => setLinkGrupo(e.target.value)}
              placeholder="https://chat.whatsapp.com/..."
            />
          </div>
        </div>

        <div className={styles.formActions}>
          <button type="submit" className={styles.submitBtn} disabled={saving}>
            <Save size={16} /> {saving ? 'Salvando...' : 'Salvar Configurações'}
          </button>
        </div>
      </form>
    </div>
  );
}
