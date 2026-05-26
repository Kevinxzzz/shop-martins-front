/* 
'use client';

import { useEffect, useState } from 'react';
import { Package, Eye as EyeIcon, Layers, TrendingUp } from 'lucide-react';
import { getDashboardStats } from '@/mock/api';
import type { DashboardStats } from '@/types';
import pageStyles from './page.module.scss';

export default function DashboardGeral() {
  const [stats, setStats] = useState<DashboardStats | null>(null);

  useEffect(() => {
    getDashboardStats('ven-001').then(setStats);
  }, []);

  if (!stats) {
    return <div className={pageStyles.loading}>Carregando...</div>;
  }

  const cards = [
    { label: 'Produtos', value: stats.totalProducts, icon: Package, color: '#0066FF' },
    { label: 'Views Totais', value: stats.totalViews.toLocaleString('pt-BR'), icon: EyeIcon, color: '#00d4aa' },
    { label: 'Categorias', value: stats.totalCategories, icon: Layers, color: '#ffb020' },
    { label: 'Média Views', value: Math.round(stats.totalViews / (stats.totalProducts || 1)), icon: TrendingUp, color: '#ff3b5c' },
  ];

  const maxViews = Math.max(...stats.viewsByDay.map(d => d.views));

  return (
    <div className={pageStyles.page}>
      <div className={pageStyles.header}>
        <h1 className={pageStyles.title}>Visão Geral</h1>
        <p className={pageStyles.subtitle}>Acompanhe as métricas da sua loja</p>
      </div>

      <div className={pageStyles.statsGrid}>
        {cards.map((card, i) => (
          <div key={i} className={pageStyles.statCard} style={{ animationDelay: `${i * 80}ms` }}>
            <div className={pageStyles.statIcon} style={{ background: `${card.color}15`, color: card.color }}>
              <card.icon size={22} />
            </div>
            <div className={pageStyles.statInfo}>
              <span className={pageStyles.statValue}>{card.value}</span>
              <span className={pageStyles.statLabel}>{card.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={pageStyles.chartsRow}>
        <div className={pageStyles.chartCard}>
          <h3 className={pageStyles.chartTitle}>Views por dia</h3>
          <div className={pageStyles.barChart}>
            {stats.viewsByDay.map((day, i) => (
              <div key={i} className={pageStyles.barItem}>
                <div className={pageStyles.barTrack}>
                  <div
                    className={pageStyles.barFill}
                    style={{ height: `${(day.views / maxViews) * 100}%` }}
                  />
                </div>
                <span className={pageStyles.barLabel}>{day.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={pageStyles.chartCard}>
          <h3 className={pageStyles.chartTitle}>Produtos por categoria</h3>
          <div className={pageStyles.categoryList}>
            {stats.productsByCategory.map((cat, i) => (
              <div key={i} className={pageStyles.categoryItem}>
                <div className={pageStyles.categoryInfo}>
                  <span className={pageStyles.categoryName}>{cat.category}</span>
                  <span className={pageStyles.categoryCount}>{cat.total}</span>
                </div>
                <div className={pageStyles.categoryBar}>
                  <div
                    className={pageStyles.categoryFill}
                    style={{ width: `${(cat.total / stats.totalProducts) * 100}%` }}
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
*/
