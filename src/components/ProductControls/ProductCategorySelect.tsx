import { Select } from '@/components/ui/Select';
import { Category } from '@/utils/api/types';

interface IProductCategorySelectProps {
  categories: Category[];
  onFilter: (categoryId: number | null) => void;
}

export const ProductCategorySelect = ({ categories, onFilter }: IProductCategorySelectProps) => {
  const options = [{ value: null, label: 'Все категории' }, ...categories.map((c) => ({ value: c.id, label: c.name }))];

  return (
    <Select<number | null>
      options={options}
      onChange={onFilter}
      placeholder="Фильтр по категориям"
      ariaLabel="Выберите категорию для фильтрации товаров"
    />
  );
};
