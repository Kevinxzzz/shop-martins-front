'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, Eye, EyeOff, Loader2, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import styles from './page.module.scss';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string; general?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!email) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (password.length < 6) {
      newErrors.password = 'A senha deve ter no mínimo 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      const card = document.getElementById('login-card');
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
      // Simulate API call for now (replace with actual fetch later)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      localStorage.setItem('shop-martins-token', 'demo-token-123');
      router.push('/');
    } catch (error: any) {
      setErrors({ general: error.message || 'Credenciais inválidas. Tente novamente.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      {/* ── Brand Panel (Hidden on mobile) ──────────────── */}
      <aside className={styles.brandPanel}>
        <div>
          <div className={styles.brandLogo}>
            <Sparkles className={styles.brandLogoIcon} size={28} />
            <span>MartinsVendas</span>
          </div>
        </div>

        <div className={styles.brandContent}>
          <h1 className={styles.brandTitle}>A sua loja esportiva de alta performance.</h1>
          <div className={styles.featuresList}>
            <div className={`${styles.featureItem} stagger-1 animate-fade-in-up`}>
              <div className={styles.featureIcon}>
                <Zap size={18} />
              </div>
              <span>Encontre os melhores vendedores verificados.</span>
            </div>
            <div className={`${styles.featureItem} stagger-2 animate-fade-in-up`}>
              <div className={styles.featureIcon}>
                <ShieldCheck size={18} />
              </div>
              <span>Garantia de autenticidade em todos os produtos.</span>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Form Panel (Full width on mobile) ────────────── */}
      <main className={styles.formPanel}>
        <div id="login-card" className={`${styles.formCard} animate-fade-in-up`}>
          <div className={styles.formHeader}>
            <div className={styles.formHeaderMobileLogo}>
              <div className={styles.brandLogo}>
                <Sparkles className={styles.brandLogoIcon} size={24} />
                <span>MartinsVendas</span>
              </div>
            </div>
            <h2 className={styles.formTitle}>Bem-vindo de volta</h2>
            <p className={styles.formSubtitle}>Insira seus dados para acessar sua conta.</p>
          </div>

          {errors.general && (
            <div className={`${styles.errorText} animate-shake`} style={{ marginBottom: '1rem', justifyContent: 'center' }}>
              {errors.general}
            </div>
          )}

          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            {/* Email */}
            <div className={styles.fieldGroup}>
              <label htmlFor="login-email" className={styles.inputLabel}>
                Email
              </label>
              <div className={`${styles.inputWrapper} ${errors.email ? styles.inputError : ''}`}>
                <Mail size={18} className={styles.inputIcon} />
                <input
                  id="login-email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                  }}
                  className={styles.inputField}
                  autoComplete="email"
                  disabled={loading}
                />
              </div>
              {errors.email && <span className={styles.errorText}>{errors.email}</span>}
            </div>

            {/* Password */}
            <div className={styles.fieldGroup}>
              <label htmlFor="login-password" className={styles.inputLabel}>
                Senha
              </label>
              <div className={`${styles.inputWrapper} ${errors.password ? styles.inputError : ''}`}>
                <Lock size={18} className={styles.inputIcon} />
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
                  }}
                  className={styles.inputField}
                  autoComplete="current-password"
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

            {/* Options */}
            <div className={styles.formOptions}>
              <label className={styles.checkboxWrapper}>
                <input type="checkbox" className={styles.checkbox} />
                <span className={styles.checkboxLabel}>Lembrar de mim</span>
              </label>
              <Link href="/recuperar-senha" className={styles.forgotPassword}>
                Esqueceu a senha?
              </Link>
            </div>

            {/* Submit */}
            <button type="submit" className={styles.submitButton} disabled={loading}>
              {loading ? (
                <Loader2 size={20} className={styles.loader} />
              ) : (
                'Entrar'
              )}
            </button>
          </form>

          <div className={styles.divider}>ou</div>

          <div className={styles.secondaryAction}>
            <p>
              Não possui uma conta?{' '}
              <Link href="/cadastro">Criar conta</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
