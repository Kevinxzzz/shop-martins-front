import { LucideIcon } from 'lucide-react';
import styles from './InputField.module.scss';

interface InputFieldProps {
  id: string;
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  icon?: LucideIcon;
  fullWidth?: boolean;
  type?: string;
  readOnly?: boolean;
  step?: string;
  min?: string;
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
  readOnly = false,
  step,
  min,
}: InputFieldProps) {
  return (
    <div className={`${styles.formGroup} ${fullWidth ? styles.fullWidth : ''}`}>
      <label className={styles.label} htmlFor={id}>
        {Icon && <Icon size={14} />} {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          id={id}
          type={type}
          className={`${styles.input} ${!Icon ? styles.noIcon : ''}`}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          readOnly={readOnly}
          step={step}
          min={min}
        />
        {Icon && <Icon className={styles.inputIcon} size={16} />}
      </div>
    </div>
  );
}
