import { ReactNode } from 'react';
import { CheckCircle2, AlertCircle, AlertTriangle } from 'lucide-react';
import styles from './Alert.module.scss';

type AlertType = 'success' | 'error' | 'warning';

interface AlertProps {
  type: AlertType;
  children: ReactNode;
  className?: string;
}

export function Alert({ type, children, className = '' }: AlertProps) {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle2 size={18} />;
      case 'error':
        return <AlertCircle size={18} />;
      case 'warning':
        return <AlertTriangle size={18} />;
    }
  };

  return (
    <div className={`${styles.alert} ${styles[type]} ${className}`} role="alert">
      {getIcon()}
      <span>{children}</span>
    </div>
  );
}
