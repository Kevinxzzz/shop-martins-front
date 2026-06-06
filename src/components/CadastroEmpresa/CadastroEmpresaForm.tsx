"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Loader2, Sparkles } from 'lucide-react';
import { useRegisterEnterprise } from '@/hooks/auth/useRegisterEnterprise';
import { getErrorMessage } from '@/services/httpClient';
import EnterpriseDataFields from './EnterpriseDataFields';
import AdminDataFields from './AdminDataFields';
import styles from './CadastroEmpresa.module.scss';

export default function CadastroEmpresaForm() {
  // Dados da Empresa
  const [documentVal, setDocumentVal] = useState('');
  const [enterpriseName, setEnterpriseName] = useState('');
  const [phoneVal, setPhoneVal] = useState('');
  const [contactLink, setContactLink] = useState('');

  // Dados do Administrador
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [errors, setErrors] = useState<{
    document?: string;
    enterpriseName?: string;
    phoneNumber?: string;
    contactLink?: string;
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const router = useRouter();
  const registerEnterpriseMutation = useRegisterEnterprise();

  const clearFieldError = (field: keyof typeof errors) => {
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = () => {
    const newErrors: typeof errors = {};
    
    // Validate CNPJ simply for now
    const unmaskedCnpj = documentVal.replace(/\D/g, '');
    if (!unmaskedCnpj) {
      newErrors.document = 'CNPJ é obrigatório';
    } else if (unmaskedCnpj.length !== 14) {
      newErrors.document = 'CNPJ deve ter 14 dígitos';
    }

    if (!enterpriseName.trim()) {
      newErrors.enterpriseName = 'Nome da empresa é obrigatório';
    }

    if (!phoneVal.trim()) {
      newErrors.phoneNumber = 'Telefone da empresa é obrigatório';
    } else {
      const cleanPhone = phoneVal.replace(/\D/g, '');
      if (cleanPhone.length < 10 || cleanPhone.length > 11) {
        newErrors.phoneNumber = 'Telefone deve ter 10 ou 11 dígitos';
      }
    }

    if (contactLink && !contactLink.startsWith('http')) {
      newErrors.contactLink = 'Link de contato deve começar com http:// ou https://';
    }

    if (!name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!email) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (password.length < 6) {
      newErrors.password = 'Mínimo de 6 caracteres';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCnpjChange = (val: string) => {
    let value = val.replace(/\D/g, '');
    if (value.length > 14) value = value.slice(0, 14);

    // Apply Mask 00.000.000/0000-00
    if (value.length > 12) {
      value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/, '$1.$2.$3/$4-$5');
    } else if (value.length > 8) {
      value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{1,4}).*/, '$1.$2.$3/$4');
    } else if (value.length > 5) {
      value = value.replace(/^(\d{2})(\d{3})(\d{1,3}).*/, '$1.$2.$3');
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{1,3}).*/, '$1.$2');
    }

    setDocumentVal(value);
    clearFieldError('document');
  };

  const handlePhoneChange = (val: string) => {
    let value = val.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    // Apply Mask (99) 99999-9999 or (99) 9999-9999
    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,4}).*/, '($1) $2');
    } else if (value.length > 0) {
      value = value.replace(/^(\d{0,2}).*/, '($1');
    }

    setPhoneVal(value);
    clearFieldError('phoneNumber');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      const card = window.document.getElementById('register-card');
      if (card) {
        card.classList.remove('animate-shake');
        void card.offsetWidth;
        card.classList.add('animate-shake');
      }
      return;
    }

    registerEnterpriseMutation.reset();
    registerEnterpriseMutation.mutate(
      {
        document: documentVal.replace(/\D/g, ''),
        name: enterpriseName,
        phoneNumber: phoneVal.replace(/\D/g, ''),
        contactLink: contactLink || undefined,
        userName: name,
        userEmail: email,
        userPassword: password,
      },
      {
        onSuccess: () => {
          router.push('/dashboard');
        },
      }
    );
  };

  return (
    <div id="register-card" className={`${styles.formCard} animate-fade-in-up`}>
      <div className={styles.formHeader}>
        <div className={styles.formHeaderMobileLogo}>
          <div className={styles.brandLogo}>
            <Sparkles className={styles.brandLogoIcon} size={24} />
            <span>MartinsVendas</span>
          </div>
        </div>
        <h2 className={styles.formTitle}>Cadastrar Empresa</h2>
        <p className={styles.formSubtitle}>Crie a conta da sua empresa e do administrador principal.</p>
      </div>

      {registerEnterpriseMutation.isError && (
        <div className={`${styles.errorText} animate-shake`} style={{ marginBottom: '1rem', justifyContent: 'center' }}>
          {getErrorMessage(registerEnterpriseMutation.error, 'Falha ao registrar empresa. Verifique os dados.')}
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        
        <h3 className={styles.sectionTitle}>Dados da Empresa</h3>

        <EnterpriseDataFields
          documentVal={documentVal}
          handleCnpjChange={handleCnpjChange}
          enterpriseName={enterpriseName}
          setEnterpriseName={setEnterpriseName}
          phoneVal={phoneVal}
          handlePhoneChange={handlePhoneChange}
          contactLink={contactLink}
          setContactLink={setContactLink}
          isPending={registerEnterpriseMutation.isPending}
          errors={errors}
          clearFieldError={clearFieldError}
        />

        <h3 className={styles.sectionTitle}>Dados do Administrador</h3>

        <AdminDataFields
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          showConfirmPassword={showConfirmPassword}
          setShowConfirmPassword={setShowConfirmPassword}
          isPending={registerEnterpriseMutation.isPending}
          errors={errors}
          clearFieldError={clearFieldError}
        />

        {/* Submit */}
        <button type="submit" className={styles.submitButton} disabled={registerEnterpriseMutation.isPending}>
          {registerEnterpriseMutation.isPending ? (
            <Loader2 size={20} className={styles.loader} />
          ) : (
            'Cadastrar Empresa e Admin'
          )}
        </button>
      </form>

      <div className={styles.divider}>ou</div>

      <div className={styles.secondaryAction}>
        <p>
          Já possui uma conta?{' '}
          <Link href="/login">Fazer login</Link>
        </p>
      </div>
    </div>
  );
}
