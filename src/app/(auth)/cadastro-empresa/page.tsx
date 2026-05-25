'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff, Loader2, Sparkles, User, Link as LinkIcon, Zap, ShieldCheck, Building2, BriefcaseBusiness } from 'lucide-react';
import styles from './page.module.scss';
import { registerEnterprise } from '@/mock/api';

export default function EnterpriseRegisterPage() {
  const router = useRouter();

  // Dados da Empresa
  const [document, setDocument] = useState('');
  const [enterpriseName, setEnterpriseName] = useState('');
  const [contactLink, setContactLink] = useState('');

  // Dados do Administrador
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [errors, setErrors] = useState<{
    document?: string;
    enterpriseName?: string;
    contactLink?: string;
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    general?: string;
  }>({});

  const clearFieldError = (field: keyof typeof errors) => {
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = () => {
    const newErrors: typeof errors = {};
    
    // Validate CNPJ simply for now
    const unmaskedCnpj = document.replace(/\D/g, '');
    if (!unmaskedCnpj) {
      newErrors.document = 'CNPJ é obrigatório';
    } else if (unmaskedCnpj.length !== 14) {
      newErrors.document = 'CNPJ deve ter 14 dígitos';
    }

    if (!enterpriseName.trim()) {
      newErrors.enterpriseName = 'Nome da empresa é obrigatório';
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

  const handleCnpjChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
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

    setDocument(value);
    clearFieldError('document');
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

    setLoading(true);
    setErrors({});

    try {
      // Usar a API mockada
      const response = await registerEnterprise({
        document: document.replace(/\D/g, ''),
        name: enterpriseName,
        contactLink: contactLink || undefined,
        userName: name,
        userEmail: email,
        userPassword: password
      });

      if (response.token) {
        localStorage.setItem('shop-martins-token', response.token);
        router.push('/dashboard'); // Redireciona pro dashboard após o cadastro da empresa
      } else {
        throw new Error('Erro ao criar conta da empresa');
      }
    } catch (error: any) {
      setErrors({ general: error.message || 'Falha ao registrar empresa. Verifique os dados.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      {/* ── Brand Panel ───────────────────────────────────── */}
      <aside className={styles.brandPanel}>
        <div>
          <div className={styles.brandLogo}>
            <Sparkles className={styles.brandLogoIcon} size={28} />
            <span>MartinsVendas</span>
          </div>
        </div>

        <div className={styles.brandContent}>
          <h1 className={styles.brandTitle}>Faça parte da nossa equipe.</h1>
          <div className={styles.featuresList}>
            <div className={`${styles.featureItem} stagger-1 animate-fade-in-up`}>
              <div className={styles.featureIcon}>
                <Zap size={18} />
              </div>
              <span>Sistema rápido e integrado.</span>
            </div>
            <div className={`${styles.featureItem} stagger-2 animate-fade-in-up`}>
              <div className={styles.featureIcon}>
                <ShieldCheck size={18} />
              </div>
              <span>Proteção e suporte dedicado aos parceiros.</span>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Form Panel ────────────────────────────────────── */}
      <main className={styles.formPanel}>
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

          {errors.general && (
            <div className={`${styles.errorText} animate-shake`} style={{ marginBottom: '1rem', justifyContent: 'center' }}>
              {errors.general}
            </div>
          )}

          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            
            <h3 className={styles.sectionTitle}>Dados da Empresa</h3>

            {/* CNPJ */}
            <div className={styles.fieldGroup}>
              <label htmlFor="enterprise-cnpj" className={styles.inputLabel}>
                CNPJ
              </label>
              <div className={`${styles.inputWrapper} ${errors.document ? styles.inputError : ''}`}>
                <BriefcaseBusiness size={18} className={styles.inputIcon} />
                <input
                  id="enterprise-cnpj"
                  type="text"
                  placeholder="00.000.000/0000-00"
                  value={document}
                  onChange={handleCnpjChange}
                  className={styles.inputField}
                  autoComplete="off"
                  disabled={loading}
                />
              </div>
              {errors.document && <span className={styles.errorText}>{errors.document}</span>}
            </div>

            {/* Nome da Empresa */}
            <div className={styles.fieldGroup}>
              <label htmlFor="enterprise-name" className={styles.inputLabel}>
                Nome da Empresa
              </label>
              <div className={`${styles.inputWrapper} ${errors.enterpriseName ? styles.inputError : ''}`}>
                <Building2 size={18} className={styles.inputIcon} />
                <input
                  id="enterprise-name"
                  type="text"
                  placeholder="Razão Social ou Nome Fantasia"
                  value={enterpriseName}
                  onChange={(e) => {
                    setEnterpriseName(e.target.value);
                    clearFieldError('enterpriseName');
                  }}
                  className={styles.inputField}
                  autoComplete="organization"
                  disabled={loading}
                />
              </div>
              {errors.enterpriseName && <span className={styles.errorText}>{errors.enterpriseName}</span>}
            </div>

            {/* Link de Contato */}
            <div className={styles.fieldGroup}>
              <label htmlFor="enterprise-link" className={styles.inputLabel}>
                Link de Contato (Opcional)
              </label>
              <div className={`${styles.inputWrapper} ${errors.contactLink ? styles.inputError : ''}`}>
                <LinkIcon size={18} className={styles.inputIcon} />
                <input
                  id="enterprise-link"
                  type="url"
                  placeholder="https://wa.me/seu-numero"
                  value={contactLink}
                  onChange={(e) => {
                    setContactLink(e.target.value);
                    clearFieldError('contactLink');
                  }}
                  className={styles.inputField}
                  autoComplete="url"
                  disabled={loading}
                />
              </div>
              {errors.contactLink && <span className={styles.errorText}>{errors.contactLink}</span>}
            </div>

            <h3 className={styles.sectionTitle}>Dados do Administrador</h3>

            {/* Nome do Admin */}
            <div className={styles.fieldGroup}>
              <label htmlFor="admin-name" className={styles.inputLabel}>
                Nome Completo
              </label>
              <div className={`${styles.inputWrapper} ${errors.name ? styles.inputError : ''}`}>
                <User size={18} className={styles.inputIcon} />
                <input
                  id="admin-name"
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    clearFieldError('name');
                  }}
                  className={styles.inputField}
                  autoComplete="name"
                  disabled={loading}
                />
              </div>
              {errors.name && <span className={styles.errorText}>{errors.name}</span>}
            </div>

            {/* Email */}
            <div className={styles.fieldGroup}>
              <label htmlFor="admin-email" className={styles.inputLabel}>
                Email
              </label>
              <div className={`${styles.inputWrapper} ${errors.email ? styles.inputError : ''}`}>
                <Mail size={18} className={styles.inputIcon} />
                <input
                  id="admin-email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    clearFieldError('email');
                  }}
                  className={styles.inputField}
                  autoComplete="email"
                  disabled={loading}
                />
              </div>
              {errors.email && <span className={styles.errorText}>{errors.email}</span>}
            </div>

            {/* Senha */}
            <div className={styles.fieldGroup}>
              <label htmlFor="admin-password" className={styles.inputLabel}>
                Senha
              </label>
              <div className={`${styles.inputWrapper} ${errors.password ? styles.inputError : ''}`}>
                <Lock size={18} className={styles.inputIcon} />
                <input
                  id="admin-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    clearFieldError('password');
                  }}
                  className={styles.inputField}
                  autoComplete="new-password"
                  disabled={loading}
                />
                <button
                  type="button"
                  className={styles.togglePassword}
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && <span className={styles.errorText}>{errors.password}</span>}
            </div>

            {/* Confirmar Senha */}
            <div className={styles.fieldGroup}>
              <label htmlFor="admin-confirm" className={styles.inputLabel}>
                Confirmar senha
              </label>
              <div className={`${styles.inputWrapper} ${errors.confirmPassword ? styles.inputError : ''}`}>
                <Lock size={18} className={styles.inputIcon} />
                <input
                  id="admin-confirm"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    clearFieldError('confirmPassword');
                  }}
                  className={styles.inputField}
                  autoComplete="new-password"
                  disabled={loading}
                />
                <button
                  type="button"
                  className={styles.togglePassword}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={showConfirmPassword ? 'Ocultar senha' : 'Mostrar senha'}
                  tabIndex={-1}
                >
                  {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.confirmPassword && <span className={styles.errorText}>{errors.confirmPassword}</span>}
            </div>

            {/* Submit */}
            <button type="submit" className={styles.submitButton} disabled={loading}>
              {loading ? (
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
      </main>
    </div>
  );
}
