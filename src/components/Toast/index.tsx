'use client';

import React, { useEffect, useState } from 'react';
import { X, CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react';
import { ToastMessage } from '@/contexts/ToastContext';
import styles from './Toast.module.scss';

interface ToastProps {
  toast: ToastMessage;
  onRemove: () => void;
}

const icons = {
  success: <CheckCircle className={styles.icon} size={20} />,
  error: <XCircle className={styles.icon} size={20} />,
  alert: <AlertTriangle className={styles.icon} size={20} />,
  info: <Info className={styles.icon} size={20} />,
};

export function Toast({ toast, onRemove }: ToastProps) {
  const [isClosing, setIsClosing] = useState(false);
  const duration = toast.duration || 5000;

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handleClose = () => {
    setIsClosing(true);
    // Espera a animação terminar para remover do DOM (300ms)
    setTimeout(() => {
      onRemove();
    }, 300);
  };

  return (
    <div
      className={`${styles.toast} ${styles[toast.type]} ${isClosing ? styles.closing : ''}`}
      role="alert"
    >
      <div className={styles.iconContainer}>
        {icons[toast.type]}
      </div>
      
      <div className={styles.content}>
        {toast.title && <strong className={styles.title}>{toast.title}</strong>}
        <span className={styles.message}>{toast.message}</span>
      </div>

      <button
        onClick={handleClose}
        className={styles.closeButton}
        aria-label="Fechar notificação"
      >
        <X size={16} />
      </button>

      {/* Progress bar para mostrar tempo restante */}
      <div 
        className={styles.progressBar} 
        style={{ animationDuration: `${duration}ms` }} 
      />
    </div>
  );
}
