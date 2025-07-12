import { useState, useMemo } from 'react';

import { useProductSorter } from './useProductSorter';
import { useProductFilter } from './useProductFilter';
import { Product } from '@/utils/types/product';
import { SortByType } from '@/utils/types/sort';

interface UseCombinedFiltersProps {
  products: Product[];
  initialSortBy: SortByType;
  initialFilterCategory: number | null;
}

export const useFilteredAndSortedProducts = ({
  products,
  initialSortBy,
  initialFilterCategory,
}: UseCombinedFiltersProps) => {
  const [sortBy, setSortBy] = useState(initialSortBy);
  const [filterCategory, setFilterCategory] = useState(initialFilterCategory);

  const { sortProducts } = useProductSorter();
  const { filterProducts } = useProductFilter();

  const filteredProducts = useMemo(() => {
    const filtered = filterProducts(products, filterCategory);
    return sortProducts(filtered, sortBy);
  }, [products, filterCategory, sortBy, sortProducts, filterProducts]);

  return {
    sortBy,
    setSortBy,
    filterCategory,
    setFilterCategory,
    filteredProducts,
  };
};
