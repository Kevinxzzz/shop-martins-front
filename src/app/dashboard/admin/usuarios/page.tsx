"use client";

import { useUsers } from '@/hooks/users/useUsers';
import { useAuth } from '@/hooks/auth/useAuth';
import { UserTable } from '@/components/AdminUsers/UserTable';
import styles from './usuarios.module.scss';

export default function AdminUsersPage() {
  const { data: users, isLoading, isError, error } = useUsers();
  const { user: currentUser } = useAuth();

  const toggleUserStatus = (id: string) => {
    // TODO: Implementar ativação/desativação real integrada com a API
    console.log('Toggle user status:', id);
    alert('Funcionalidade de alterar status será implementada em breve.');
  };

  if (isError) {
    return (
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>Gerenciar Usuários</h1>
        </div>
        <div style={{ padding: '2rem', textAlign: 'center', color: '#ef4444' }}>
          <p>Erro ao carregar usuários: {error?.message || 'Erro desconhecido'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Gerenciar Usuários</h1>
      </div>

      <UserTable 
        users={users || []} 
        isLoading={isLoading} 
        currentUser={currentUser || null}
        onToggleStatusClick={toggleUserStatus}
      />
    </div>
  );
}
