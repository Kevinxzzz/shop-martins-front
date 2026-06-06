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
  disabled?: boolean;
  autoComplete?: string;
  error?: string;
  rightElement?: React.ReactNode;
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
  disabled = false,
  autoComplete,
  error,
  rightElement,
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
          className={`${styles.input} ${!Icon ? styles.noIcon : ''} ${error ? styles.inputError : ''} ${rightElement ? styles.hasRightElement : ''}`}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          readOnly={readOnly}
          disabled={disabled}
          autoComplete={autoComplete}
          step={step}
          min={min}
        />
        {Icon && <Icon className={styles.inputIcon} size={16} />}
        {rightElement && <div className={styles.rightElement}>{rightElement}</div>}
      </div>
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
}
