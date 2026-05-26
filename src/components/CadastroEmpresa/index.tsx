"use client";

import BrandPanel from './BrandPanel';
import CadastroEmpresaForm from './CadastroEmpresaForm';
import styles from './CadastroEmpresa.module.scss';

export default function CadastroEmpresaContainer() {
  return (
    <div className={styles.page}>
      <BrandPanel />
      <main className={styles.formPanel}>
        <CadastroEmpresaForm />
      </main>
    </div>
  );
}
