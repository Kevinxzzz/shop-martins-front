'use client';

import { useState, useEffect } from 'react';
import { Save, Building2, Fingerprint, Phone, Link2, CheckCircle2, Loader2 } from 'lucide-react';
import { InputField } from '@/components/InputField';
import { FormSection } from './FormSection';
import { useEnterprise } from '@/hooks/enterprise/useEnterprise';
import { useUpdateEnterprise } from '@/hooks/enterprise/useUpdateEnterprise';
import styles from './AdminConfiguracoes.module.scss';

export default function AdminConfiguracoesContainer() {
  const { data: enterprise, isLoading } = useEnterprise();
  const { mutateAsync: updateEnterprise, isPending: isSaving } = useUpdateEnterprise();

  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [linkGrupo, setLinkGrupo] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (enterprise) {
      setNome(enterprise.name || '');
      setNumero(enterprise.phone || '');
      setCpfCnpj(enterprise.document || '');
      setLinkGrupo(enterprise.salesGroupLink || '');
    }
  }, [enterprise]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(false);

    try {
      await updateEnterprise({
        name: nome,
        phone: numero,
        salesGroupLink: linkGrupo || null,
      });
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 4000);
    } catch (error) {
      console.error("Erro ao salvar as configurações:", error);
    }
  };

  if (isLoading) {
    return (
      <div className={styles.pageContainer} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px', color: 'var(--color-text-tertiary)' }}>
        <Loader2 size={24} className={styles.spinner} />
        <span style={{ marginLeft: '8px' }}>Carregando dados da empresa...</span>
      </div>
    );
  }

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
              readOnly
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
          <button type="submit" className={styles.submitBtn} disabled={isSaving}>
            {isSaving ? (
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
