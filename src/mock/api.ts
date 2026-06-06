import { produtos, vendedores, categorias } from "./data";
import type { Product, User, Category, DashboardStats, AdminStats } from '@/types';
import { UserRole } from '@/shared/constants/userRoles';

// ═══════════════════════════════════════════════════════════════
// SHOP MARTINS — Mock API Service
// ═══════════════════════════════════════════════════════════════

const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));



export async function getProductById(id: string): Promise<Product | null> {
  await delay(250);
  return produtos.find((p) => p.id === id) || null;
}

export async function getRelatedProducts(
  categoryId: string,
  excludeId?: string,
): Promise<Product[]> {
  await delay(200);
  return produtos
    .filter((p) => p.categoryId === categoryId && p.id !== excludeId)
    .slice(0, 8);
}

// ── Vendors ─────────────────────────────────────────────────
export async function getVendors(): Promise<User[]> {
  await delay(300);
  return vendedores.filter(v => v.role === UserRole.SELLER || v.role === UserRole.ADMIN);
}

export async function getVendorById(id: string): Promise<User | null> {
  await delay(200);
  return vendedores.find((v) => v.id === id) || null;
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
    products: produtos
      .filter((p) => p.title.toLowerCase().includes(q))
      .slice(0, 10),
    vendors: vendedores.filter((v) => v.name.toLowerCase().includes(q)),
  };
}

// ── Dashboard ───────────────────────────────────────────────
export async function getDashboardStats(
  userId: string,
): Promise<DashboardStats> {
  await delay(400);
  const userProducts = produtos.filter((p) => p.sellerId === userId);
  const cats = [...new Set(userProducts.map((p) => p.categoryId))];

  return {
    totalProducts: userProducts.length,
    totalViews: userProducts.reduce((sum, p) => sum + p.countViews, 0),
    totalCategories: cats.length,
    productsByCategory: cats.map((catId) => ({
      category: categorias.find((c) => c.id === catId)?.name || "",
      total: userProducts.filter((p) => p.categoryId === catId).length,
    })),
    viewsByDay: Array.from({ length: 7 }, (_, i) => ({
      day: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"][i],
      views: Math.floor(Math.random() * 500) + 50,
    })),
  };
}

export async function getAdminStats(empresaId: string): Promise<AdminStats> {
  await delay(500);
  const empProducts = produtos.filter((p) => p.enterpriseId === empresaId);
  const cats = [...new Set(empProducts.map((p) => p.categoryId))];
  const activeVendors = vendedores.filter((v) => v.isActive);

  return {
    totalProducts: empProducts.length,
    totalViews: empProducts.reduce((sum, p) => sum + p.countViews, 0),
    totalCategories: cats.length,
    totalVendors: vendedores.length,
    totalActiveUsers: activeVendors.length,
    productsByCategory: cats.map((catId) => ({
      category: categorias.find((c) => c.id === catId)?.name || "",
      total: empProducts.filter((p) => p.categoryId === catId).length,
    })),
    viewsByDay: Array.from({ length: 7 }, (_, i) => ({
      day: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"][i],
      views: Math.floor(Math.random() * 2000) + 200,
    })),
  };
}

// ── Admin ───────────────────────────────────────────────────


export async function registerEnterprise(
  data: any,
): Promise<{ token: string; user: any; enterprise: any }> {
  await delay(1000);
  return {
    token: "mock-enterprise-token-123",
    user: {
      id: "new-admin-1",
      name: data.userName,
      email: data.userEmail,
      role: UserRole.ADMIN,
    },
    enterprise: { id: "new-emp-1", name: data.name, cnpj: data.document },
  };
}
