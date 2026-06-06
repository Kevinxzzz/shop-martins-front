import { Camera, Loader2 } from 'lucide-react';
import styles from './Perfil.module.scss';
import React, { useRef } from 'react';

interface AvatarUploadProps {
  onFileSelect: (file: File) => void;
  isUploading?: boolean;
}

export function AvatarUpload({ onFileSelect, isUploading = false }: AvatarUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onFileSelect(e.target.files[0]);
    }
  };

  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>Foto de Perfil</label>
      <div
        className={`${styles.uploadArea} ${isUploading ? styles.disabled : ''}`}
        onClick={() => !isUploading && fileInputRef.current?.click()}
        role="button"
        tabIndex={isUploading ? -1 : 0}
        style={isUploading ? { opacity: 0.6, cursor: 'not-allowed' } : {}}
        onKeyDown={(e) => {
          if (!isUploading && (e.key === 'Enter' || e.key === ' ')) {
            fileInputRef.current?.click();
          }
        }}
      >
        {isUploading ? (
          <Loader2 size={20} className={`${styles.uploadIcon} ${styles.spinner}`} />
        ) : (
          <Camera size={20} className={styles.uploadIcon} />
        )}
        <div className={styles.uploadText}>
          {isUploading ? 'Enviando...' : 'Alterar foto'}
        </div>
      </div>
      <input
        ref={fileInputRef}
        id="avatar"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileChange}
        disabled={isUploading}
      />
    </div>
  );
}
