"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff, Loader2, Sparkles, User, Ticket } from 'lucide-react';
import { useRegisterUser } from '@/hooks/auth/useRegisterUser';
import { getErrorMessage } from '@/services/httpClient';
import styles from './Cadastro.module.scss';

export default function CadastroForm() {
  const [inviteToken, setInviteToken] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [errors, setErrors] = useState<{
    inviteToken?: string;
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const router = useRouter();
  const registerUserMutation = useRegisterUser();

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

      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        {/* Token de Convite */}
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
