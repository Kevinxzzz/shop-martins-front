import React, { useState, useRef, useEffect } from 'react';
import { Shield, Store, ChevronDown } from 'lucide-react';
import { useUpdateUserRole } from '@/hooks/users/useUpdateUserRole';
import { UserRole, userRoleTranslations } from '@/shared/constants/userRoles';
import styles from './RoleSelector.module.scss';

interface RoleSelectorProps {
  userId: string;
  currentRole: UserRole;
  disabled?: boolean;
}

export function RoleSelector({ userId, currentRole, disabled = false }: RoleSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { mutate, isPending } = useUpdateUserRole();

  console.log('RoleSelector Debug:', { userId, currentRole, disabled });

  // Fecha o popover se clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const togglePopover = () => {
    if (disabled || isPending) return;
    setIsOpen((prev) => !prev);
  };

  const handleSelectRole = (role: UserRole) => {
    setIsOpen(false);
    if (role === currentRole) return;

    mutate({ userId, role });
  };

  const roleClass = currentRole === UserRole.ADMIN ? styles.admin : styles.seller;

  // Se estiver desabilitado e não for para carregar animações, mostra apenas a tag simples.
  if (disabled && !isPending) {
    return (
      <span className={`${styles.staticBadge} ${roleClass}`}>
        {userRoleTranslations[currentRole] || currentRole}
      </span>
    );
  }

  return (
    <div className={styles.popoverContainer} ref={containerRef}>
      {/* Badge Interativo (Trigger) */}
      <div 
        className={`${styles.roleBadgeInteractive} ${roleClass} ${isOpen ? styles.isOpen : ''} ${isPending ? styles.disabled : ''}`}
        onClick={togglePopover}
      >
        {isPending ? (
          <>
            <div className={styles.loadingSpinner} />
            <span>Salvando...</span>
          </>
        ) : (
          <>
            {userRoleTranslations[currentRole] || currentRole}
            <ChevronDown className={styles.chevron} />
          </>
        )}
      </div>

      {/* Popover Card */}
      {isOpen && !isPending && (
        <div className={styles.popoverMenu}>
          <div 
            className={`${styles.optionCard} ${styles.admin} ${currentRole === UserRole.ADMIN ? styles.active : ''}`}
            onClick={() => handleSelectRole(UserRole.ADMIN)}
          >
            <div className={styles.iconWrapper}>
              <Shield />
            </div>
            <div className={styles.details}>
              <span className={styles.title}>Administrador</span>
              <span className={styles.description}>Acesso total ao painel e configurações da empresa.</span>
            </div>
          </div>

          <div 
            className={`${styles.optionCard} ${styles.seller} ${currentRole === UserRole.SELLER ? styles.active : ''}`}
            onClick={() => handleSelectRole(UserRole.SELLER)}
          >
            <div className={styles.iconWrapper}>
              <Store />
            </div>
            <div className={styles.details}>
              <span className={styles.title}>Vendedor</span>
              <span className={styles.description}>Acesso restrito para gerenciar apenas seus produtos.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
