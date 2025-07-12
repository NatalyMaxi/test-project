import { SortByType } from '@/utils/types/sort';

export const sortOptions = [
  { value: SortByType.DEFAULT, label: 'По умолчанию' },
  { value: SortByType.PRICE_ASC, label: 'По возрастанию цены' },
  { value: SortByType.PRICE_DESC, label: 'По убыванию цены' },
];
