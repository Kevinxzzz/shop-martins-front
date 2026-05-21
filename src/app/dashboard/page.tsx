'use client';

import { useEffect, useState } from 'react';
import { Package, Eye, Layers, TrendingUp } from 'lucide-react';
import { getDashboardStats } from '@/mock/api';
import type { DashboardStats } from '@/types';
import styles from './page.module.scss';

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);

  useEffect(() => {
    getDashboardStats('ven-001').then(setStats);
  }, []);

  if (!stats) {
    return <div className={styles.loading}>Carregando...</div>;
  }

  const cards = [
    { label: 'Produtos', value: stats.totalProdutos, icon: Package, color: '#0066FF' },
    { label: 'Views Totais', value: stats.totalViews.toLocaleString('pt-BR'), icon: Eye, color: '#00d4aa' },
    { label: 'Categorias', value: stats.totalCategorias, icon: Layers, color: '#ffb020' },
    { label: 'Média Views', value: Math.round(stats.totalViews / (stats.totalProdutos || 1)), icon: TrendingUp, color: '#ff3b5c' },
  ];

  const maxViews = Math.max(...stats.viewsPorDia.map(d => d.views));

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Visão Geral</h1>
        <p className={styles.subtitle}>Acompanhe as métricas da sua loja</p>
      </div>

      <div className={styles.statsGrid}>
        {cards.map((card, i) => (
          <div key={i} className={styles.statCard} style={{ animationDelay: `${i * 80}ms` }}>
            <div className={styles.statIcon} style={{ background: `${card.color}15`, color: card.color }}>
              <card.icon size={22} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>{card.value}</span>
              <span className={styles.statLabel}>{card.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.chartsRow}>
        <div className={styles.chartCard}>
          <h3 className={styles.chartTitle}>Views por dia</h3>
          <div className={styles.barChart}>
            {stats.viewsPorDia.map((day, i) => (
              <div key={i} className={styles.barItem}>
                <div className={styles.barTrack}>
                  <div
                    className={styles.barFill}
                    style={{ height: `${(day.views / maxViews) * 100}%` }}
                  />
                </div>
                <span className={styles.barLabel}>{day.dia}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.chartCard}>
          <h3 className={styles.chartTitle}>Produtos por categoria</h3>
          <div className={styles.categoryList}>
            {stats.produtosPorCategoria.map((cat, i) => (
              <div key={i} className={styles.categoryItem}>
                <div className={styles.categoryInfo}>
                  <span className={styles.categoryName}>{cat.categoria}</span>
                  <span className={styles.categoryCount}>{cat.total}</span>
                </div>
                <div className={styles.categoryBar}>
                  <div
                    className={styles.categoryFill}
                    style={{ width: `${(cat.total / stats.totalProdutos) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
