import { InputField } from '@/components/InputField';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import styles from './CadastroEmpresa.module.scss';

interface AdminDataFieldsProps {
  name: string;
  setName: (val: string) => void;
  email: string;
  setEmail: (val: string) => void;
  password: string;
  setPassword: (val: string) => void;
  confirmPassword: string;
  setConfirmPassword: (val: string) => void;
  showPassword: boolean;
  setShowPassword: (val: boolean) => void;
  showConfirmPassword: boolean;
  setShowConfirmPassword: (val: boolean) => void;
  isPending: boolean;
  errors: {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  };
  clearFieldError: (field: any) => void;
}

export default function AdminDataFields({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  isPending,
  errors,
  clearFieldError,
}: AdminDataFieldsProps) {
  return (
    <>
      <InputField
        id="admin-name"
        label="Nome Completo"
        value={name}
        onChange={(val) => {
          setName(val);
          clearFieldError('name');
        }}
        placeholder="Seu nome"
        icon={User}
        disabled={isPending}
        error={errors.name}
        autoComplete="name"
      />

      <InputField
        id="admin-email"
        label="Email"
        value={email}
        onChange={(val) => {
          setEmail(val);
          clearFieldError('email');
        }}
        placeholder="seu@email.com"
        icon={Mail}
        disabled={isPending}
        error={errors.email}
        autoComplete="email"
        type="email"
      />

      <InputField
        id="admin-password"
        label="Senha"
        value={password}
        onChange={(val) => {
          setPassword(val);
          clearFieldError('password');
        }}
        placeholder="••••••••"
        icon={Lock}
        disabled={isPending}
        error={errors.password}
        autoComplete="new-password"
        type={showPassword ? 'text' : 'password'}
        rightElement={
          <button
            type="button"
            className={styles.togglePassword}
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        }
      />

      <InputField
        id="admin-confirm"
        label="Confirmar senha"
        value={confirmPassword}
        onChange={(val) => {
          setConfirmPassword(val);
          clearFieldError('confirmPassword');
        }}
        placeholder="••••••••"
        icon={Lock}
        disabled={isPending}
        error={errors.confirmPassword}
        autoComplete="new-password"
        type={showConfirmPassword ? 'text' : 'password'}
        rightElement={
          <button
            type="button"
            className={styles.togglePassword}
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            aria-label={showConfirmPassword ? 'Ocultar senha' : 'Mostrar senha'}
            tabIndex={-1}
          >
            {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        }
      />
    </>
  );
}
