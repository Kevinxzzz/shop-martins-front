'use client';

import Image from 'next/image';
import { useUsers } from '@/hooks/users/useUsers';
import { userRoleTranslations } from '@/shared/constants/userRoles';
import styles from './usuarios.module.scss';

export default function AdminUsersPage() {
  const { data: users, isLoading, isError, error } = useUsers();

  const toggleUser = (id: string) => {
    // TODO: Implementar ativação/desativação real integrada com a API
    console.log('Toggle user status:', id);
    alert('Funcionalidade de alterar status será implementada em breve.');
  };

  if (isLoading) {
    return (
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>Gerenciar Usuários</h1>
        </div>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <p>Carregando usuários...</p>
        </div>
      </div>
    );
  }

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
      {/* Cabeçalho */}
      <div className={styles.header}>
        <h1 className={styles.title}>Gerenciar Usuários</h1>
      </div>

      {/* Lista de Usuários Responsiva */}
      <div className={styles.usersList}>
        {/* Cabeçalho para Desktop */}
        <div className={styles.listHeader}>
          <div>Usuário</div>
          <div>Email</div>
          <div>Cargo</div>
          <div>Status</div>
          <div className={styles.alignRight}>Ações</div>
        </div>

        {/* Corpo da Lista */}
        <div className={styles.listBody}>
          {users?.length === 0 && (
            <div style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>
              Nenhum usuário encontrado.
            </div>
          )}
          {users?.map((user) => (
            <div key={user.id} className={styles.userRow}>
              {/* Coluna 1: Usuário */}
              <div className={styles.userCol}>
                <Image
                  src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`}
                  alt={user.name}
                  width={40}
                  height={40}
                  className={styles.avatar}
                  unoptimized
                />
                <span className={styles.userName}>{user.name}</span>
              </div>

              {/* Coluna 2: Email */}
              <div className={styles.emailCol}>
                <span className={styles.mobileLabel}>Email</span>
                <span className={styles.emailText}>{user.email}</span>
              </div>

              {/* Coluna 3: Cargo */}
              <div className={styles.roleCol}>
                <span className={styles.mobileLabel}>Cargo</span>
                <span className={styles.roleBadge}>{userRoleTranslations[user.role] || user.role}</span>
              </div>

              {/* Coluna 4: Status */}
              <div className={styles.statusCol}>
                <span className={styles.mobileLabel}>Status</span>
                <span
                  className={`${styles.statusBadge} ${
                    user.status === 'ACTIVE' ? styles.active : styles.inactive
                  }`}
                >
                  {user.status === 'ACTIVE' ? 'Ativo' : 'Inativo'}
                </span>
              </div>

              {/* Coluna 5: Ações */}
              <div className={styles.actionsCol}>
                <button
                  className={`${styles.actionBtn} ${
                    user.status === 'ACTIVE' ? styles.btnDeactivate : styles.btnActivate
                  }`}
                  onClick={() => toggleUser(user.id)}
                >
                  {user.status === 'ACTIVE' ? 'Desativar' : 'Ativar'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

