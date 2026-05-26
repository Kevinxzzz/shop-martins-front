"use client";

import BrandPanel from './BrandPanel';
import CadastroForm from './CadastroForm';
import styles from './Cadastro.module.scss';

export default function CadastroContainer() {
  return (
    <div className={styles.page}>
      <BrandPanel />
      <main className={styles.formPanel}>
        <CadastroForm />
      </main>
    </div>
  );
}
