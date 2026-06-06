export interface DashboardStats {
  totalProducts: number;
  totalViews: number;
  totalCategories: number;
  productsByCategory: { category: string; total: number }[];
  viewsByDay: { day: string; views: number }[];
}

export interface AdminStats extends DashboardStats {
  totalVendors: number;
  totalActiveUsers: number;
}
