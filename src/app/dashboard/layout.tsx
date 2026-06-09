'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, Package, Plus, User, Users, Shield, Key, Settings,
  ChevronRight, Moon, Sun, Menu, X, Home, LogOut, Tag
} from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { useAuth } from '@/hooks/auth/useAuth';
import { isAdmin } from '@/shared/utils/permissions';
import styles from './layout.module.scss';

const vendorNav = [
  // { href: '/dashboard', label: 'Visão Geral', icon: LayoutDashboard },
  { href: '/dashboard', label: 'Meus Produtos', icon: Package },
  { href: '/dashboard/produtos/novo', label: 'Novo Produto', icon: Plus },
  { href: '/dashboard/perfil', label: 'Meu Perfil', icon: User },
];

const adminNav = [
  { href: '/dashboard/admin/usuarios', label: 'Usuários', icon: Users },
  { href: '/dashboard/admin/produtos', label: 'Todos Produtos', icon: Package },
  { href: '/dashboard/admin/categorias', label: 'Categorias', icon: Tag },
  { href: '/dashboard/admin/tokens', label: 'Tokens de convite', icon: Key },
  { href: '/dashboard/admin/configuracoes', label: 'Configurações', icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const showAdminNav = isAdmin(user?.role);

  const isActive = (href: string) => pathname === href;

  const sidebarContent = (
    <>
      <div className={styles.sidebarHeader}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>S</div>
          <span className={styles.logoText}>Shop<span>Martins</span></span>
        </Link>
      </div>

      <nav className={styles.nav}>
        <div className={styles.navSection}>
          <span className={styles.navLabel}>Menu</span>
          {vendorNav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${isActive(item.href) ? styles.active : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
              {isActive(item.href) && <ChevronRight size={14} className={styles.navArrow} />}
            </Link>
          ))}
        </div>

        {showAdminNav && (
          <div className={styles.navSection}>
            <span className={styles.navLabel}>
              <Shield size={12} /> Admin
            </span>
            {adminNav.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${isActive(item.href) ? styles.active : ''}`}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
                {isActive(item.href) && <ChevronRight size={14} className={styles.navArrow} />}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <div className={styles.sidebarFooter}>
        <Link href="/" className={styles.navLink} onClick={() => setSidebarOpen(false)}>
          <Home size={18} />
          <span>Voltar ao site</span>
        </Link>
        <button className={styles.navLink} onClick={toggleTheme}>
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          <span>{theme === 'light' ? 'Modo escuro' : 'Modo claro'}</span>
        </button>
      </div>
    </>
  );

  return (
    <ProtectedRoute>
      <div className={styles.wrapper}>
        {/* Desktop sidebar */}
        <aside className={styles.sidebar}>{sidebarContent}</aside>

        {/* Mobile sidebar container */}
        <div className={`${styles.mobileWrapper} ${sidebarOpen ? styles.open : ''}`}>
          <div className={styles.overlay} onClick={() => setSidebarOpen(false)} />
          <aside className={styles.mobileSidebar}>{sidebarContent}</aside>
        </div>

        {/* Main content */}
        <div className={styles.main}>
          <header className={styles.topbar}>
            <button
              className={styles.menuToggle}
              onClick={() => setSidebarOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu size={20} />
            </button>
            <div className={styles.topbarRight}>
              <button className={styles.themeBtn} onClick={toggleTheme}>
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>
          </header>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
