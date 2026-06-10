"use client";

import { useUsers } from '@/hooks/users/useUsers';
import { useAuth } from '@/hooks/auth/useAuth';
import { UserTable } from '@/components/AdminUsers/UserTable';
import { useDeleteUser } from '@/hooks/users/useDeleteUser';
import ModalConfirm from '@/components/ModalConfirm';
import { useState } from 'react';
import { UserDTO } from '@/types';
import styles from './usuarios.module.scss';

export default function AdminUsersPage() {
  const { data: users, isLoading, isError, error } = useUsers();
  const { user: currentUser } = useAuth();
  const { mutate: deleteUser, isPending: isDeleting } = useDeleteUser();
  
  const [userToDelete, setUserToDelete] = useState<UserDTO | null>(null);

  const handleDeleteClick = (user: UserDTO) => {
    setUserToDelete(user);
  };

  const handleConfirmDelete = () => {
    if (userToDelete) {
      deleteUser(userToDelete.id, {
        onSuccess: () => {
          setUserToDelete(null);
        }
      });
    }
  };

  const handleCancelDelete = () => {
    setUserToDelete(null);
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
        onDeleteClick={handleDeleteClick}
      />

      <ModalConfirm
        isOpen={!!userToDelete}
        title="Excluir Usuário"
        message={
          <span>
            Tem certeza que deseja excluir o usuário <strong>{userToDelete?.name}</strong> permanentemente?
            Esta ação não pode ser desfeita.
          </span>
        }
        confirmText="Sim, Excluir"
        cancelText="Cancelar"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        variant="danger"
        isLoading={isDeleting}
        loadingText="Excluindo..."
      />
    </div>
  );
}
