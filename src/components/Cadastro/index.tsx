"use client";

import BrandPanel from './BrandPanel';
import CadastroForm from './CadastroForm';
import styles from './Cadastro.module.scss';

interface CadastroContainerProps {
  token?: string;
}

export default function CadastroContainer({ token }: CadastroContainerProps) {
  return (
    <div className={styles.page}>
      <BrandPanel />
      <main className={styles.formPanel}>
        <CadastroForm initialToken={token} />
      </main>
    </div>
  );
}
