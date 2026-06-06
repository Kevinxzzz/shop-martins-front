import React from 'react';
import styles from './AdminConfiguracoes.module.scss';

interface FormSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function FormSection({ title, description, children }: FormSectionProps) {
  return (
    <div className={styles.configSection}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.configTitle}>{title}</h3>
        <p className={styles.configDesc}>{description}</p>
      </div>
      {children}
    </div>
  );
}
