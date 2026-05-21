"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Moon,
  Sun,
  Menu,
  X,
  LayoutDashboard,
  ShoppingBag,
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import styles from "./Header.module.scss";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/vendedores", label: "Vendedores" },
    { href: "https://chat.whatsapp.com/", label: "Vender sua conta", isSpecial: true },
  ];

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.isScrolled : ""}`}
      >
        <div className={styles.container}>
          <div className={styles.left}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIcon}>
                <ShoppingBag size={20} />
              </div>
              <span className={styles.logoText}>
                Martins<strong>Vendas</strong>
              </span>
            </Link>
          </div>

          <nav className={styles.navCenter}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.active : ""} ${link.isSpecial ? styles.specialLink : ""}`}
                target={link.isSpecial ? "_blank" : undefined}
                rel={link.isSpecial ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.right}>
            <div
              className={`${styles.searchWrapper} ${isSearchActive ? styles.active : ""}`}
            >
              <button
                className={styles.iconBtn}
                onClick={() => setIsSearchActive(!isSearchActive)}
                aria-label="Buscar"
              >
                <Search size={18} />
              </button>
              {isSearchActive && (
                <input
                  type="text"
                  className={styles.searchInput}
                  placeholder="O que você procura?"
                  autoFocus
                  onBlur={() => setIsSearchActive(false)}
                />
              )}
            </div>

            <button
              className={styles.iconBtn}
              onClick={toggleTheme}
              aria-label="Mudar tema"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Link href="/dashboard" className={styles.primaryBtn}>
              <LayoutDashboard size={16} />
              <span>Dashboard</span>
            </Link>

            <button
              className={styles.hamburgerBtn}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`${styles.mobileOverlay} ${isMobileMenuOpen ? styles.open : ""}`}
      >
        <div
          className={styles.mobileBackdrop}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className={styles.mobileMenu}>
          <div className={styles.mobileHeader}>
            <span className={styles.logoText}>
              Martins<strong>Vendas</strong>
            </span>
            <button
              className={styles.closeBtn}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Fechar"
            >
              <X size={24} />
            </button>
          </div>

          <div className={styles.mobileSearch}>
            <Search size={18} />
            <input type="text" placeholder="Buscar produtos..." />
          </div>

          <nav className={styles.mobileNav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.mobileNavLink} ${link.isSpecial ? styles.specialLink : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
                target={link.isSpecial ? "_blank" : undefined}
                rel={link.isSpecial ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/dashboard"
              className={`${styles.mobileNavLink} ${styles.mobileNavHighlight}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <LayoutDashboard size={18} />
              Dashboard
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
