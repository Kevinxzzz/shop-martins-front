export type CategoryStatus = "ACTIVE" | "DELETED" | "ALL";

// DTOs (Data Transfer Objects) - O que a API retorna e recebe
export interface CategoryResponseDTO {
  id: string;
  name: string;
  slug: string;
  status: "ACTIVE" | "DELETED";
  deletedAt: Date | null;
  productsCount: number;
}

export interface PaginatedCategoriesResponse {
  data: CategoryResponseDTO[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface CreateCategoryDTO {
  name: string;
}

export interface UpdateCategoryDTO {
  name: string;
}

// ViewModels - O que a UI consome
export interface CategoryViewModel extends CategoryResponseDTO {
  // Aqui podemos adicionar propriedades derivadas futuramente, ex:
  // formattedDate?: string;
  // isEditable?: boolean;
}

// Exportar Category baseada no ViewModel para manter compatibilidade com componentes existentes por enquanto
export type Category = CategoryViewModel;
