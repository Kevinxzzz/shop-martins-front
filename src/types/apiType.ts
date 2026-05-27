export interface ApiErrorResponse {
  error: string;
  details?: Array<{ message: string; path?: string[] }>;
}
