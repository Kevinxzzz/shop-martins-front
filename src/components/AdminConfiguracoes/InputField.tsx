import { LucideIcon } from 'lucide-react';
import styles from './AdminConfiguracoes.module.scss';

interface InputFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  icon: LucideIcon;
  fullWidth?: boolean;
  type?: string;
}

export function InputField({
  id,
  label,
  value,
  onChange,
  placeholder,
  required = false,
  icon: Icon,
  fullWidth = false,
  type = 'text',
}: InputFieldProps) {
  return (
    <div className={`${styles.formGroup} ${fullWidth ? styles.fullWidth : ''}`}>
      <label className={styles.label} htmlFor={id}>
        <Icon size={14} /> {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          id={id}
          type={type}
          className={styles.input}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
        />
        <Icon className={styles.inputIcon} size={16} />
      </div>
    </div>
  );
}
