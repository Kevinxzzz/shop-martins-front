"use client";

import BrandPanel from './BrandPanel';
import LoginForm from './LoginForm';
import styles from './Login.module.scss';

export default function LoginContainer() {
  return (
    <div className={styles.page}>
      <BrandPanel />
      <main className={styles.formPanel}>
        <LoginForm />
      </main>
    </div>
  );
}
