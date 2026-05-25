'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Search, Moon, Sun, Menu, X, LayoutDashboard, Home, ShoppingBag, Users, ChevronRight } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { getCategories } from '@/mock/api';
import type { Category } from '@/types';
import styles from './Navbar.module.scss';

const navLinks = [
  { href: '/', label: 'Início', icon: Home },
  { href: '/vendedores', label: 'Vendedores', icon: Users },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const [categories, setCategories] = useState<Category[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setDrawerOpen(false);
    }
  };

  return (
    <>
      <nav className={styles.navbar} role="navigation" aria-label="Navegação principal">
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="Martins Vendas - Página inicial">
            <div className={styles.logoMark}>
              <ShoppingBag size={18} strokeWidth={2.5} />
            </div>
            <div className={styles.logoText}>
              Martins<span>Vendas</span>
            </div>
          </Link>

          {/* Center Nav Links (desktop) */}
          <div className={styles.centerNav}>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <div className={styles.navDropdown}>
              <button className={styles.navLink}>
                Categorias
                <ChevronRight size={14} className={styles.navDropdownIcon} />
              </button>
              <div className={styles.dropdownMenu}>
                {categories.map(cat => (
                  <Link
                    key={cat.id}
                    href={`/?category=${cat.id}`}
                    className={styles.dropdownItem}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className={styles.actions}>
            <button
              className={styles.iconBtn}
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Buscar"
            >
              <Search size={18} />
            </button>

            <button
              className={styles.iconBtn}
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <Link href="/dashboard" className={styles.dashboardBtn}>
              <LayoutDashboard size={15} />
              Dashboard
            </Link>

            <button
              className={styles.menuBtn}
              onClick={() => setDrawerOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={drawerOpen}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>

        {/* Desktop Search Bar (expands) */}
        {searchOpen && (
          <div className={styles.searchBar}>
            <form className={styles.searchForm} onSubmit={handleSearch}>
              <Search size={18} className={styles.searchIcon} aria-hidden="true" />
              <input
                type="search"
                className={styles.searchInput}
                placeholder="Buscar produtos, marcas, categorias..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                aria-label="Buscar produtos"
                autoFocus
              />
              <button type="button" className={styles.searchClose} onClick={() => setSearchOpen(false)}>
                <X size={16} />
              </button>
            </form>
          </div>
        )}
      </nav>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <>
          <div className={styles.drawerOverlay} onClick={() => setDrawerOpen(false)} aria-hidden="true" />
          <aside className={styles.drawer} role="dialog" aria-label="Menu de navegação">
            <div className={styles.drawerHeader}>
              <div className={styles.logoText}>
                Martins<span>Vendas</span>
              </div>
              <button className={styles.drawerClose} onClick={() => setDrawerOpen(false)} aria-label="Fechar menu">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSearch} className={styles.drawerSearchForm}>
              <Search size={16} className={styles.drawerSearchIcon} />
              <input
                type="search"
                className={styles.drawerSearch}
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </form>

            <div className={styles.drawerSection}>
              <span className={styles.drawerLabel}>Navegação</span>
              <div className={styles.drawerLinks}>
                {navLinks.map(link => (
                  <Link key={link.href} href={link.href} className={styles.drawerLink}>
                    <link.icon size={18} />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.drawerSection}>
              <span className={styles.drawerLabel}>Categorias</span>
              <div className={styles.drawerLinks}>
                {categories.map(cat => (
                  <Link key={cat.id} href={`/?category=${cat.id}`} className={styles.drawerLink}>
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/dashboard" className={styles.drawerDashboard}>
              <LayoutDashboard size={18} />
              Acessar Dashboard
            </Link>
          </aside>
        </>
      )}
    </>
  );
}
