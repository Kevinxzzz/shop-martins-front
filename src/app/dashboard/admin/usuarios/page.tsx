'use client';

import { useState } from 'react';
import Image from 'next/image';
import { vendedores } from '@/mock/data';
import styles from '../../shared.module.scss';

export default function AdminUsersPage() {
  const [users, setUsers] = useState(vendedores.map(v => ({ ...v })));

  const toggleUser = (id: string) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, isActive: !u.isActive } : u));
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Gerenciar Usuários</h1>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Usuário</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>
                  <div className={styles.productRow}>
                    <Image
                      src={user.profilePicture}
                      alt={user.name}
                      width={36}
                      height={36}
                      className={styles.productThumb}
                      style={{ borderRadius: '50%' }}
                      unoptimized
                    />
                    <span>{user.name}</span>
                  </div>
                </td>
                <td>{user.email}</td>
                <td><span className={styles.badge}>{user.role}</span></td>
                <td>
                  <span className={`${styles.statusBadge} ${user.isActive ? styles.active : styles.inactive}`}>
                    {user.isActive ? 'Ativo' : 'Inativo'}
                  </span>
                </td>
                <td>
                  <button className={styles.toggleBtn} onClick={() => toggleUser(user.id)}>
                    {user.isActive ? 'Desativar' : 'Ativar'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
