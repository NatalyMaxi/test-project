import { ProductCategorySelect } from './ProductCategorySelect';
import { ProductSortSelect } from './ProductSortSelect';
import { Category } from '@/utils/api/types';
import { SortByType } from '@/utils/types/sort';

interface IProductControlsProps {
  categories: Category[];
  onSort: (sortBy: SortByType) => void;
  onFilter: (categoryId: number | null) => void;
}

export const ProductControls = ({ categories, onSort, onFilter }: IProductControlsProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between mb-6 w-full">
      <div className="w-full sm:w-auto">
        <ProductSortSelect onSort={onSort} />
      </div>
      <div className="w-full sm:w-auto">
        <ProductCategorySelect categories={categories} onFilter={onFilter} />
      </div>
    </div>
  );
};
