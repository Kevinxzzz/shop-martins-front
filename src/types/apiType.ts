export interface ApiErrorResponse {
  error: string;
  details?: Array<{ message: string; path?: string[] }>;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
