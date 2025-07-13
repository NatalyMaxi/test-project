import { useCallback } from 'react';

import { Product } from '@/utils/api/types';

export const useProductFilter = () => {
  const filterProducts = useCallback((products: Product[], categoryId: number | null): Product[] => {
    if (categoryId === null) return products;

    const filtered = products.filter((p) => p.category.id === categoryId);
    return filtered;
  }, []);

  return { filterProducts };
};
