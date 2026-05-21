// ═══════════════════════════════════════════════════════════════
// SHOP MARTINS — TypeScript Types
// ═══════════════════════════════════════════════════════════════

export interface Empresa {
  id: string;
  nome: string;
  numero: string;
  cpfCnpj: string;
  linkGrupoDevenda?: string;
}

export type UserRole = 'ADMIN' | 'VENDEDOR';

export interface Usuario {
  id: string;
  empresa_id: string;
  nome: string;
  email: string;
  telefone_whatsapp: string;
  foto_perfil: string;
  role: UserRole;
  ativo: boolean;
}

export interface Categoria {
  id: string;
  nome: string;
  slug: string;
}

export interface Midia {
  id: string;
  url_arquivo: string;
  tipo: 'imagem' | 'video';
  ordem: number;
  produto_id: string;
}

export interface Produto {
  id: string;
  titulo: string;
  descricao: string;
  preco: number;
  categoria_id: string;
  vendedor_id: string;
  empresa_id: string;
  countViews: number;
  midias: Midia[];
  categoria?: Categoria;
  vendedor?: Usuario;
  createdAt: string;
}

export interface DashboardStats {
  totalProdutos: number;
  totalViews: number;
  totalCategorias: number;
  produtosPorCategoria: { categoria: string; total: number }[];
  viewsPorDia: { dia: string; views: number }[];
}

export interface AdminStats extends DashboardStats {
  totalVendedores: number;
  totalUsuariosAtivos: number;
}

export interface Token {
  id: string;
  token: string;
  createdAt: string;
  expiresAt: string;
  ativo: boolean;
}
