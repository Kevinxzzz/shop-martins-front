'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Save, Camera } from 'lucide-react';
import { vendedores } from '@/mock/data';
import styles from '../shared.module.scss';

export default function ProfilePage() {
  const user = vendedores[0];
  const [nome, setNome] = useState(user.name);
  const [whatsapp, setWhatsapp] = useState(user.whatsappPhone);
  const [saving, setSaving] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await new Promise(r => setTimeout(r, 800));
    setSaving(false);
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Meu Perfil</h1>
      </div>

      <div className={styles.profileCard}>
        <div className={styles.profileHeader}>
          <Image
            src={user.profilePicture}
            alt={user.name}
            width={80}
            height={80}
            className={styles.profileAvatar}
            unoptimized
          />
          <div>
            <h2 className={styles.profileName}>{user.name}</h2>
            <span className={styles.profileRole}>{user.role}</span>
          </div>
        </div>

        <form onSubmit={handleSave}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="name">Nome</label>
              <input
                id="name"
                className={styles.input}
                value={nome}
                onChange={e => setNome(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">Email</label>
              <input id="email" className={styles.input} value={user.email} disabled />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="whatsapp">WhatsApp</label>
              <input
                id="whatsapp"
                className={styles.input}
                value={whatsapp}
                onChange={e => setWhatsapp(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Foto de Perfil</label>
              <label className={styles.uploadArea} htmlFor="avatar" style={{ padding: '1.5rem' }}>
                <Camera size={20} className={styles.uploadIcon} />
                <div className={styles.uploadText}>Alterar foto</div>
              </label>
              <input id="avatar" type="file" accept="image/*" style={{ display: 'none' }} />
            </div>
          </div>

          <div className={styles.formActions}>
            <button type="submit" className={styles.submitBtn} disabled={saving}>
              <Save size={16} /> {saving ? 'Salvando...' : 'Salvar Alterações'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
