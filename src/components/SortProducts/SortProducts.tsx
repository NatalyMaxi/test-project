'use client';

import { SortByType } from '@/utils/types/sort';
import { sortOptions } from '@/utils/constants/sortOptions';

interface SortProductsProps {
  onSort: (sortBy: SortByType) => void;
}

export const SortProducts = ({ onSort }: SortProductsProps) => {
  return (
    <select onChange={(e) => onSort(e.target.value as SortByType)} className="border rounded px-2 py-1 cursor-pointer">
      {sortOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
