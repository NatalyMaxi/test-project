import { useCallback } from 'react';

import { Product } from '@/utils/types/product';
import { SortByType } from '@/utils/types/sort';

export const useProductSorter = () => {
  const sortProducts = useCallback((products: Product[], sortType: SortByType) => {
    const sorted = [...products];
    if (sortType === SortByType.PRICE_ASC) {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortType === SortByType.PRICE_DESC) {
      sorted.sort((a, b) => b.price - a.price);
    }
    return sorted;
  }, []);

  return { sortProducts };
};
