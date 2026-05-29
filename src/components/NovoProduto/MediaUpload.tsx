import { Upload, X } from 'lucide-react';
import Image from 'next/image';
import styles from './NovoProduto.module.scss';

interface MediaUploadProps {
  previews: string[];
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove: (index: number) => void;
}

export function MediaUpload({ previews, onUpload, onRemove }: MediaUploadProps) {
  return (
    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
      <label className={styles.label}>Imagens e Vídeo</label>
      <label className={styles.uploadArea} htmlFor="files">
        <Upload size={24} className={styles.uploadIcon} />
        <div className={styles.uploadText}>Clique para adicionar mídias</div>
        <div className={styles.uploadHint}>JPG, PNG, MP4 — máx 10MB cada</div>
      </label>
      <input
        id="files"
        type="file"
        accept="image/*,video/*"
        multiple
        onChange={onUpload}
        style={{ display: 'none' }}
      />

      {previews.length > 0 && (
        <div className={styles.previewGrid}>
          {previews.map((url, i) => (
            <div key={i} className={styles.previewItem}>
              <Image
                src={url}
                alt={`Preview ${i + 1}`}
                width={72}
                height={72}
                unoptimized
              />
              <button
                type="button"
                className={styles.removeBtn}
                onClick={() => onRemove(i)}
                title="Remover mídia"
              >
                <X size={12} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
