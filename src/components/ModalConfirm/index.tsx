'use client';

import { AlertTriangle } from 'lucide-react';
import styles from './ModalConfirm.module.scss';

import { ReactNode } from 'react';

interface ModalConfirmProps {
  isOpen: boolean;
  title: string | ReactNode;
  message: string | ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  variant?: 'danger' | 'default';
  isLoading?: boolean;
  loadingText?: string;
}

export default function ModalConfirm({
  isOpen,
  title,
  message,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  onConfirm,
  onCancel,
  variant = 'default',
  isLoading = false,
  loadingText = 'Carregando...',
}: ModalConfirmProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onCancel} aria-hidden="true" />
      <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="modal-title">
        {variant === 'danger' && (
          <div className={styles.iconWrapper}>
            <AlertTriangle size={24} />
          </div>
        )}
        <h3 id="modal-title" className={styles.title}>{title}</h3>
        <p className={styles.message}>{message}</p>
        <div className={styles.actions}>
          <button className={styles.cancelBtn} onClick={onCancel} disabled={isLoading}>
            {cancelText}
          </button>
          <button
            className={`${styles.confirmBtn} ${variant === 'danger' ? styles.danger : ''}`}
            onClick={onConfirm}
            disabled={isLoading}
          >
            {isLoading ? loadingText : confirmText}
          </button>
        </div>
      </div>
    </>
  );
}
