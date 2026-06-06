"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff, Loader2, Sparkles, User, Ticket, CheckCircle, AlertTriangle, ArrowLeft } from 'lucide-react';
import { useRegisterUser } from '@/hooks/auth/useRegisterUser';
import { getErrorMessage } from '@/services/httpClient';
import { validateToken } from '@/services/authService';
import styles from './Cadastro.module.scss';

interface CadastroFormProps {
  initialToken?: string;
}

export default function CadastroForm({ initialToken }: CadastroFormProps) {
  const [inviteToken, setInviteToken] = useState(initialToken || '');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // States for token validation
  const [isValidating, setIsValidating] = useState(!!initialToken);
  const [validationError, setValidationError] = useState('');
  const [enterpriseName, setEnterpriseName] = useState('');
  const [isTokenValid, setIsTokenValid] = useState(false);

  const [errors, setErrors] = useState<{
    inviteToken?: string;
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const router = useRouter();
  const registerUserMutation = useRegisterUser();

  useEffect(() => {
    if (initialToken) {
      setInviteToken(initialToken);
      const checkToken = async () => {
        try {
          const res = await validateToken(initialToken);
          setEnterpriseName(res.enterpriseName);
          setIsTokenValid(true);
        } catch (error: any) {
          setValidationError(getErrorMessage(error, 'Convite inválido ou expirado.'));
          setIsTokenValid(false);
        } finally {
          setIsValidating(false);
        }
      };
      checkToken();
    }
  }, [initialToken]);

  const clearFieldError = (field: keyof typeof errors) => {
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = () => {
    const newErrors: typeof errors = {};
    
    if (!inviteToken) {
      newErrors.inviteToken = 'Obrigatório para o registro';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      const card = document.getElementById('register-card');
      if (card) {
        card.classList.remove('animate-shake');
        void card.offsetWidth;
        card.classList.add('animate-shake');
      }
      return;
    }

    registerUserMutation.reset();
    registerUserMutation.mutate(
      {
        inviteToken,
        name,
        email,
        password,
      },
      {
        onSuccess: () => {
          router.push('/');
        },
      }
    );
  };

  if (isValidating) {
    return (
      <div className={`${styles.formCard} animate-fade-in-up`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem' }}>
        <Loader2 size={40} className={`animate-spin ${styles.loader}`} style={{ marginBottom: '1rem', color: 'var(--color-primary)' }} />
        <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--color-text)' }}>Validando convite...</h3>
        <p style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Aguarde um momento.</p>
      </div>
    );
  }

  if (initialToken && validationError) {
    return (
      <div className={`${styles.formCard} animate-fade-in-up`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 2rem', textAlign: 'center' }}>

        <h2 style={{ margin: '0 0 1rem', fontSize: '1.5rem', color: 'var(--color-text)' }}>Oops!</h2>
        <p style={{ color: 'var(--color-error)', fontWeight: 500, fontSize: '1.1rem', marginBottom: '2rem' }}>{validationError}</p>
        
        <Link href="/cadastro" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--color-primary)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: 600, transition: 'background 0.2s' }}>
          <ArrowLeft size={18} />
          Tentar outro convite
        </Link>
      </div>
    );
  }

  return (
    <div id="register-card" className={`${styles.formCard} animate-fade-in-up`}>
      <div className={styles.formHeader}>
        <div className={styles.formHeaderMobileLogo}>
          <div className={styles.brandLogo}>
            <Sparkles className={styles.brandLogoIcon} size={24} />
            <span>MartinsVendas</span>
          </div>
        </div>
        <h2 className={styles.formTitle}>Criar Conta</h2>
        <p className={styles.formSubtitle}>Junte-se à plataforma usando seu convite.</p>
      </div>

      {registerUserMutation.isError && (
        <div className={`${styles.errorText} animate-shake`} style={{ marginBottom: '1rem', justifyContent: 'center' }}>
          {getErrorMessage(registerUserMutation.error, 'Falha ao registrar. Verifique os dados.')}
        </div>
      )}

      {isTokenValid && (
        <div style={{ 
          background: 'rgba(34, 197, 94, 0.1)', 
          border: '1px solid rgba(34, 197, 94, 0.2)',
          padding: '1rem', 
          borderRadius: '0.5rem', 
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0.75rem'
        }}>
          <CheckCircle size={20} color="var(--color-success, #22c55e)" style={{ marginTop: '0.125rem', flexShrink: 0 }} />
          <div>
            <h4 style={{ margin: 0, color: 'var(--color-success, #22c55e)', fontSize: '0.95rem', fontWeight: 600 }}>Convite aplicado ✓</h4>
            <p style={{ margin: '0.25rem 0 0', color: 'var(--color-text)', fontSize: '0.9rem' }}>
              Empresa: <strong>{enterpriseName}</strong>
            </p>
            <p style={{ margin: '0.25rem 0 0', color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
              Token vinculado automaticamente.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        {/* Token de Convite - Oculto se já foi validado pela URL */}
        {!isTokenValid && (
          <div className={styles.fieldGroup}>
            <label htmlFor="register-token" className={styles.inputLabel}>
              Token de Convite
            </label>
            <div className={`${styles.inputWrapper} ${errors.inviteToken ? styles.inputError : ''}`}>
              <Ticket size={18} className={styles.inputIcon} />
              <input
                id="register-token"
                type="text"
                placeholder="EX: INVITE-123"
                value={inviteToken}
                onChange={(e) => {
                  setInviteToken(e.target.value);
                  clearFieldError('inviteToken');
                }}
                className={styles.inputField}
                autoComplete="off"
                disabled={registerUserMutation.isPending}
              />
            </div>
            {errors.inviteToken && <span className={styles.errorText}>{errors.inviteToken}</span>}
          </div>
        )}

        {/* Nome */}
        <div className={styles.fieldGroup}>
          <label htmlFor="register-name" className={styles.inputLabel}>
            Nome completo
          </label>
          <div className={`${styles.inputWrapper} ${errors.name ? styles.inputError : ''}`}>
            <User size={18} className={styles.inputIcon} />
            <input
              id="register-name"
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                clearFieldError('name');
              }}
              className={styles.inputField}
              autoComplete="name"
              disabled={registerUserMutation.isPending}
            />
          </div>
          {errors.name && <span className={styles.errorText}>{errors.name}</span>}
        </div>

        {/* Email */}
        <div className={styles.fieldGroup}>
          <label htmlFor="register-email" className={styles.inputLabel}>
            Email
          </label>
          <div className={`${styles.inputWrapper} ${errors.email ? styles.inputError : ''}`}>
            <Mail size={18} className={styles.inputIcon} />
            <input
              id="register-email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                clearFieldError('email');
              }}
              className={styles.inputField}
              autoComplete="email"
              disabled={registerUserMutation.isPending}
            />
          </div>
          {errors.email && <span className={styles.errorText}>{errors.email}</span>}
        </div>

        {/* Senha */}
        <div className={styles.fieldGroup}>
          <label htmlFor="register-password" className={styles.inputLabel}>
            Senha
          </label>
          <div className={`${styles.inputWrapper} ${errors.password ? styles.inputError : ''}`}>
            <Lock size={18} className={styles.inputIcon} />
            <input
              id="register-password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                clearFieldError('password');
              }}
              className={styles.inputField}
              autoComplete="new-password"
              disabled={registerUserMutation.isPending}
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
          <label htmlFor="register-confirm" className={styles.inputLabel}>
            Confirmar senha
          </label>
          <div className={`${styles.inputWrapper} ${errors.confirmPassword ? styles.inputError : ''}`}>
            <Lock size={18} className={styles.inputIcon} />
            <input
              id="register-confirm"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                clearFieldError('confirmPassword');
              }}
              className={styles.inputField}
              autoComplete="new-password"
              disabled={registerUserMutation.isPending}
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
        <button type="submit" className={styles.submitButton} disabled={registerUserMutation.isPending}>
          {registerUserMutation.isPending ? (
            <Loader2 size={20} className={styles.loader} />
          ) : (
            'Criar Conta'
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
