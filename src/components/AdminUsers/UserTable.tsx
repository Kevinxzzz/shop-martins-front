import React from 'react';
import Image from 'next/image';
import { UserDTO, AuthUser } from '@/types';
import { getAvatarUrl } from '@/utils';
import { RoleSelector } from './RoleSelector';
import styles from './UserTable.module.scss';

interface UserTableProps {
  users: UserDTO[] | undefined;
  isLoading: boolean;
  currentUser: AuthUser | null;
  onToggleStatusClick: (id: string) => void;
}

export function UserTable({ 
  users, 
  isLoading, 
  currentUser,
  onToggleStatusClick 
}: UserTableProps) {
  
  function canEditRole(user: UserDTO) {
    if (!currentUser) return false;
    return user.id !== currentUser.id && user.status === 'ACTIVE';
  }

  // LOGS ADICIONADOS PARA DEBUG DO PAYLOAD DA API
  console.log('--- USER TABLE DEBUG: PAYLOAD DA API ---');
  users?.forEach(u => {
    console.log(`User: ${u.name} | isFounder: ${u.isFounder} | role: ${u.role}`);
  });
  console.log('----------------------------------------');

  return (
    <div className={styles.usersList}>
      <div className={styles.listHeader}>
        <div>Usuário</div>
        <div>Email</div>
        <div>Cargo</div>
        <div>Status</div>
        <div className={styles.alignRight}>Ações</div>
      </div>

      <div className={styles.listBody}>
        {isLoading && (
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            Carregando usuários...
          </div>
        )}

        {!isLoading && users?.length === 0 && (
          <div style={{ padding: '2rem', textAlign: 'center', color: '#6b7280' }}>
            Nenhum usuário encontrado.
          </div>
        )}

        {!isLoading && users?.map((user) => (
          <div key={user.id} className={styles.userRow}>
            <div className={styles.userCol}>
              <Image
                src={getAvatarUrl(user.profileImageUrl, user.name)}
                alt={user.name}
                width={40}
                height={40}
                className={styles.avatar}
                unoptimized
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span className={styles.userName}>{user.name}</span>
                {user.isFounder && (
                  <span style={{ fontSize: '10px', color: '#f59e0b', fontWeight: 'bold' }}>
                    🌟 Fundador
                  </span>
                )}
              </div>
            </div>

            <div className={styles.emailCol}>
              <span className={styles.mobileLabel}>Email</span>
              <span className={styles.emailText}>{user.email}</span>
            </div>

            <div className={styles.roleCol}>
              <span className={styles.mobileLabel}>Cargo</span>
              <RoleSelector 
                userId={user.id} 
                currentRole={user.role} 
                disabled={user.isFounder || !canEditRole(user)} 
              />
            </div>

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

            <div className={styles.actionsCol}>
              <button
                className={`${styles.actionBtn} ${
                  user.status === 'ACTIVE' ? styles.btnDeactivate : styles.btnActivate
                }`}
                onClick={() => onToggleStatusClick(user.id)}
              >
                {user.status === 'ACTIVE' ? 'Desativar' : 'Ativar'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
