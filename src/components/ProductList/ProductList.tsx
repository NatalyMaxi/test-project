import { ProductCard } from '@/components';
import { Product } from '@/utils/api/types';

interface IProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: IProductListProps) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <li key={product.id}>
          <ProductCard product={product} index={index} />
        </li>
      ))}
    </ul>
  );
};
