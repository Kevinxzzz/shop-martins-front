import { produtos, vendedores, categorias, empresa, tokens } from './data';
import type { Produto, Usuario, Categoria, DashboardStats, AdminStats, Token } from '@/types';

// ═══════════════════════════════════════════════════════════════
// SHOP MARTINS — Mock API Service
// ═══════════════════════════════════════════════════════════════

const delay = (ms = 300) => new Promise(r => setTimeout(r, ms));

// ── Products ────────────────────────────────────────────────
export async function getProducts(filters?: {
  categoria?: string;
  precoMin?: number;
  precoMax?: number;
  search?: string;
  vendedorId?: string;
  page?: number;
  limit?: number;
}): Promise<{ products: Produto[]; total: number }> {
  await delay(350);
  let filtered = [...produtos];

  if (filters?.categoria) {
    filtered = filtered.filter(p => p.categoria_id === filters.categoria);
  }
  if (filters?.precoMin !== undefined) {
    filtered = filtered.filter(p => p.preco >= filters.precoMin!);
  }
  if (filters?.precoMax !== undefined) {
    filtered = filtered.filter(p => p.preco <= filters.precoMax!);
  }
  if (filters?.search) {
    const q = filters.search.toLowerCase();
    filtered = filtered.filter(
      p => p.titulo.toLowerCase().includes(q) || p.descricao.toLowerCase().includes(q)
    );
  }
  if (filters?.vendedorId) {
    filtered = filtered.filter(p => p.vendedor_id === filters.vendedorId);
  }

  const total = filtered.length;
  const page = filters?.page || 1;
  const limit = filters?.limit || 20;
  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + limit);

  return { products: paginated, total };
}

export async function getProductById(id: string): Promise<Produto | null> {
  await delay(250);
  return produtos.find(p => p.id === id) || null;
}

export async function getRelatedProducts(categoryId: string, excludeId?: string): Promise<Produto[]> {
  await delay(200);
  return produtos
    .filter(p => p.categoria_id === categoryId && p.id !== excludeId)
    .slice(0, 8);
}

// ── Vendors ─────────────────────────────────────────────────
export async function getVendors(): Promise<Usuario[]> {
  await delay(300);
  return vendedores.filter(v => v.role === 'VENDEDOR' || v.role === 'ADMIN');
}

export async function getVendorById(id: string): Promise<Usuario | null> {
  await delay(200);
  return vendedores.find(v => v.id === id) || null;
}

// ── Categories ──────────────────────────────────────────────
export async function getCategories(): Promise<Categoria[]> {
  await delay(150);
  return categorias;
}

// ── Search ──────────────────────────────────────────────────
export async function searchGlobal(query: string): Promise<{
  products: Produto[];
  vendors: Usuario[];
}> {
  await delay(300);
  const q = query.toLowerCase();
  return {
    products: produtos.filter(p => p.titulo.toLowerCase().includes(q)).slice(0, 10),
    vendors: vendedores.filter(v => v.nome.toLowerCase().includes(q)),
  };
}

// ── Dashboard ───────────────────────────────────────────────
export async function getDashboardStats(userId: string): Promise<DashboardStats> {
  await delay(400);
  const userProducts = produtos.filter(p => p.vendedor_id === userId);
  const cats = [...new Set(userProducts.map(p => p.categoria_id))];

  return {
    totalProdutos: userProducts.length,
    totalViews: userProducts.reduce((sum, p) => sum + p.countViews, 0),
    totalCategorias: cats.length,
    produtosPorCategoria: cats.map(catId => ({
      categoria: categorias.find(c => c.id === catId)?.nome || '',
      total: userProducts.filter(p => p.categoria_id === catId).length,
    })),
    viewsPorDia: Array.from({ length: 7 }, (_, i) => ({
      dia: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'][i],
      views: Math.floor(Math.random() * 500) + 50,
    })),
  };
}

export async function getAdminStats(empresaId: string): Promise<AdminStats> {
  await delay(500);
  const empProducts = produtos.filter(p => p.empresa_id === empresaId);
  const cats = [...new Set(empProducts.map(p => p.categoria_id))];
  const activeVendors = vendedores.filter(v => v.ativo);

  return {
    totalProdutos: empProducts.length,
    totalViews: empProducts.reduce((sum, p) => sum + p.countViews, 0),
    totalCategorias: cats.length,
    totalVendedores: vendedores.length,
    totalUsuariosAtivos: activeVendors.length,
    produtosPorCategoria: cats.map(catId => ({
      categoria: categorias.find(c => c.id === catId)?.nome || '',
      total: empProducts.filter(p => p.categoria_id === catId).length,
    })),
    viewsPorDia: Array.from({ length: 7 }, (_, i) => ({
      dia: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'][i],
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
    ativo: true,
  };
  tokens.push(newToken);
  return newToken;
}

export async function getEmpresa() {
  await delay(150);
  return empresa;
}
