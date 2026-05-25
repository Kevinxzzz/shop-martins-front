import { produtos, vendedores, categorias, empresa, tokens } from './data';
import type { Product, User, Category, DashboardStats, AdminStats, Token } from '@/types';

// ═══════════════════════════════════════════════════════════════
// SHOP MARTINS — Mock API Service
// ═══════════════════════════════════════════════════════════════

const delay = (ms = 300) => new Promise(r => setTimeout(r, ms));

// ── Products ────────────────────────────────────────────────
export async function getProducts(filters?: {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  sellerId?: string;
  page?: number;
  limit?: number;
}): Promise<{ products: Product[]; total: number }> {
  await delay(350);
  let filtered = [...produtos];

  if (filters?.category) {
    filtered = filtered.filter(p => p.categoryId === filters.category);
  }
  if (filters?.minPrice !== undefined) {
    filtered = filtered.filter(p => p.price >= filters.minPrice!);
  }
  if (filters?.maxPrice !== undefined) {
    filtered = filtered.filter(p => p.price <= filters.maxPrice!);
  }
  if (filters?.search) {
    const q = filters.search.toLowerCase();
    filtered = filtered.filter(
      p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
    );
  }
  if (filters?.sellerId) {
    filtered = filtered.filter(p => p.sellerId === filters.sellerId);
  }

  const total = filtered.length;
  const page = filters?.page || 1;
  const limit = filters?.limit || 20;
  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + limit);

  return { products: paginated, total };
}

export async function getProductById(id: string): Promise<Product | null> {
  await delay(250);
  return produtos.find(p => p.id === id) || null;
}

export async function getRelatedProducts(categoryId: string, excludeId?: string): Promise<Product[]> {
  await delay(200);
  return produtos
    .filter(p => p.categoryId === categoryId && p.id !== excludeId)
    .slice(0, 8);
}

// ── Vendors ─────────────────────────────────────────────────
export async function getVendors(): Promise<User[]> {
  await delay(300);
  return vendedores.filter(v => v.role === 'VENDOR' || v.role === 'ADMIN');
}

export async function getVendorById(id: string): Promise<User | null> {
  await delay(200);
  return vendedores.find(v => v.id === id) || null;
}

// ── Categories ──────────────────────────────────────────────
export async function getCategories(): Promise<Category[]> {
  await delay(150);
  return categorias;
}

// ── Search ──────────────────────────────────────────────────
export async function searchGlobal(query: string): Promise<{
  products: Product[];
  vendors: User[];
}> {
  await delay(300);
  const q = query.toLowerCase();
  return {
    products: produtos.filter(p => p.title.toLowerCase().includes(q)).slice(0, 10),
    vendors: vendedores.filter(v => v.name.toLowerCase().includes(q)),
  };
}

// ── Dashboard ───────────────────────────────────────────────
export async function getDashboardStats(userId: string): Promise<DashboardStats> {
  await delay(400);
  const userProducts = produtos.filter(p => p.sellerId === userId);
  const cats = [...new Set(userProducts.map(p => p.categoryId))];

  return {
    totalProducts: userProducts.length,
    totalViews: userProducts.reduce((sum, p) => sum + p.countViews, 0),
    totalCategories: cats.length,
    productsByCategory: cats.map(catId => ({
      category: categorias.find(c => c.id === catId)?.name || '',
      total: userProducts.filter(p => p.categoryId === catId).length,
    })),
    viewsByDay: Array.from({ length: 7 }, (_, i) => ({
      day: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'][i],
      views: Math.floor(Math.random() * 500) + 50,
    })),
  };
}

export async function getAdminStats(empresaId: string): Promise<AdminStats> {
  await delay(500);
  const empProducts = produtos.filter(p => p.enterpriseId === empresaId);
  const cats = [...new Set(empProducts.map(p => p.categoryId))];
  const activeVendors = vendedores.filter(v => v.isActive);

  return {
    totalProducts: empProducts.length,
    totalViews: empProducts.reduce((sum, p) => sum + p.countViews, 0),
    totalCategories: cats.length,
    totalVendors: vendedores.length,
    totalActiveUsers: activeVendors.length,
    productsByCategory: cats.map(catId => ({
      category: categorias.find(c => c.id === catId)?.name || '',
      total: empProducts.filter(p => p.categoryId === catId).length,
    })),
    viewsByDay: Array.from({ length: 7 }, (_, i) => ({
      day: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'][i],
      views: Math.floor(Math.random() * 2000) + 200,
    })),
  };
}

// ── Admin ───────────────────────────────────────────────────
export async function getTokens(): Promise<Token[]> {
  await delay(200);
  return tokens;
}

export async function generateToken(): Promise<Token> {
  await delay(400);
  const newToken: Token = {
    id: `tok-${Date.now()}`,
    token: `sk_live_${Math.random().toString(36).slice(2)}${Math.random().toString(36).slice(2)}`,
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
    isActive: true,
  };
  tokens.push(newToken);
  return newToken;
}

export async function getEmpresa() {
  await delay(150);
  return empresa;
}

export async function registerEnterprise(data: any): Promise<{ token: string, user: any, enterprise: any }> {
  await delay(1000);
  return {
    token: 'mock-enterprise-token-123',
    user: { id: 'new-admin-1', name: data.userName, email: data.userEmail, role: 'ADMIN' },
    enterprise: { id: 'new-emp-1', name: data.name, cnpj: data.document }
  };
}
