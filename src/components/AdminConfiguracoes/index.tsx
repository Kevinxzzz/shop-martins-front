'use client';

import { useState } from 'react';
import { Save, Building2, Fingerprint, Phone, Link2, CheckCircle2, Loader2 } from 'lucide-react';
import { empresa } from '@/mock/data';
import { InputField } from './InputField';
import { FormSection } from './FormSection';
import styles from './AdminConfiguracoes.module.scss';

export default function AdminConfiguracoesContainer() {
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
        <FormSection
          title="Dados da Empresa"
          description="Informações gerais de contato e identificação da sua loja."
        >
          <div className={styles.formGrid}>
            <InputField
              id="empNome"
              label="Nome da Empresa"
              value={nome}
              onChange={setNome}
              placeholder="Ex: Minha Loja"
              required
              icon={Building2}
              fullWidth
            />

            <InputField
              id="empCnpj"
              label="CPF / CNPJ"
              value={cpfCnpj}
              onChange={setCpfCnpj}
              placeholder="00.000.000/0000-00"
              required
              icon={Fingerprint}
            />

            <InputField
              id="empNumero"
              label="WhatsApp Comercial"
              value={numero}
              onChange={setNumero}
              placeholder="Ex: 5511999999999"
              required
              icon={Phone}
            />
          </div>
        </FormSection>

        {/* Link Grupo de Venda */}
        <FormSection
          title="Link Grupo de Venda"
          description="O link do grupo de WhatsApp para o qual os clientes serão redirecionados."
        >
          <InputField
            id="linkGrupo"
            label="URL do Grupo"
            value={linkGrupo}
            onChange={setLinkGrupo}
            placeholder="https://chat.whatsapp.com/..."
            icon={Link2}
          />
        </FormSection>

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
