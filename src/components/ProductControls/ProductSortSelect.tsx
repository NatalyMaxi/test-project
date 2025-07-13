import { Select } from '@/components/ui/Select';
import { SortByType } from '@/utils/types/sort';
import { sortOptions } from '@/utils/constants/sortOptions';

interface IProductSortSelectProps {
  onSort: (sortBy: SortByType) => void;
}

export const ProductSortSelect = ({ onSort }: IProductSortSelectProps) => {
  return (
    <Select<SortByType>
      options={sortOptions}
      onChange={onSort}
      placeholder="Сортировка"
      ariaLabel="Выберите сортировку товаров"
    />
  );
};
