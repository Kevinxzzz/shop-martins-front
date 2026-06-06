// ═══════════════════════════════════════════════════════════════
// Hooks: useCategoryMutations
// Mutações para CRUD de Categorias (Create, Update, Archive, Restore, Delete)
// ═══════════════════════════════════════════════════════════════

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  createCategory, 
  updateCategory, 
  archiveCategory, 
  restoreCategory, 
  deleteCategoryPermanently,
} from '@/services/categoryService';
import type { CreateCategoryDTO, UpdateCategoryDTO, CategoryResponseDTO, PaginatedCategoriesResponse } from '@/types/categoryType';
import { type ApiError } from '@/services/httpClient';
import { queryKeys } from '@/lib/react-query/queryKeys';

function cloneDeep<T>(data: T): T {
  return JSON.parse(JSON.stringify(data));
}

export function useCreateCategory() {
  const queryClient = useQueryClient();

  return useMutation<CategoryResponseDTO, ApiError, CreateCategoryDTO>({
    mutationKey: ['categories', 'create'],
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.categories.all });
    },
  });
}

export function useUpdateCategory() {
  const queryClient = useQueryClient();

  return useMutation<CategoryResponseDTO, ApiError, { id: string; data: UpdateCategoryDTO }>({
    mutationKey: ['categories', 'update'],
    mutationFn: updateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.categories.all });
    },
  });
}

export function useMoveCategoryToTrash() {
  const queryClient = useQueryClient();

  return useMutation<{ message: string }, ApiError, string, { previousData: any }>({
    mutationKey: ['categories', 'archive'],
    mutationFn: archiveCategory,
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.categories.all });

      const previousData = cloneDeep(queryClient.getQueriesData({ queryKey: queryKeys.categories.all }));

      queryClient.setQueriesData<PaginatedCategoriesResponse>({ queryKey: queryKeys.categories.list }, (old) => {
        if (!old) return old;
        return {
          ...old,
          data: old.data.map(cat => cat.id === id ? { ...cat, status: "DELETED", deletedAt: new Date() } : cat)
        };
      });

      return { previousData };
    },
    onError: (_err, _id, context) => {
      if (context?.previousData) {
        context.previousData.forEach(([queryKey, data]: any) => {
          queryClient.setQueryData(queryKey, data);
        });
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.categories.all });
    },
  });
}

export function useRestoreCategory() {
  const queryClient = useQueryClient();

  return useMutation<{ message: string }, ApiError, string, { previousData: any }>({
    mutationKey: ['categories', 'restore'],
    mutationFn: restoreCategory,
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.categories.all });

      const previousData = cloneDeep(queryClient.getQueriesData({ queryKey: queryKeys.categories.all }));

      queryClient.setQueriesData<PaginatedCategoriesResponse>({ queryKey: queryKeys.categories.trash }, (old) => {
        if (!old) return old;
        return {
          ...old,
          data: old.data.map(cat => cat.id === id ? { ...cat, status: "ACTIVE", deletedAt: null } : cat)
        };
      });

      return { previousData };
    },
    onError: (_err, _id, context) => {
      if (context?.previousData) {
        context.previousData.forEach(([queryKey, data]: any) => {
          queryClient.setQueryData(queryKey, data);
        });
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.categories.all });
    },
  });
}

export function useDeleteCategoryPermanently() {
  const queryClient = useQueryClient();

  return useMutation<{ message: string }, ApiError, string, { previousData: any }>({
    mutationKey: ['categories', 'deletePermanently'],
    mutationFn: deleteCategoryPermanently,
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.categories.all });

      const previousData = cloneDeep(queryClient.getQueriesData({ queryKey: queryKeys.categories.all }));

      queryClient.setQueriesData<PaginatedCategoriesResponse>({ queryKey: queryKeys.categories.trash }, (old) => {
        if (!old) return old;
        return {
          ...old,
          data: old.data.filter(cat => cat.id !== id)
        };
      });

      return { previousData };
    },
    onError: (_err, _id, context) => {
      if (context?.previousData) {
        context.previousData.forEach(([queryKey, data]: any) => {
          queryClient.setQueryData(queryKey, data);
        });
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.categories.all });
    },
  });
}
