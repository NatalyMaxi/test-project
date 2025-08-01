import Link from 'next/link';

import { ProductImage } from '@/components';
import { Product } from '@/utils/api/types';
import { isValidUrl } from '@/utils/helpers/url';

interface IProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard = ({ product, index }: IProductCardProps) => {
  const categoryImage = product.category?.image;

  const firstValidImage = product.images.find(isValidUrl);

  const src = firstValidImage || (isValidUrl(categoryImage) ? categoryImage : '');

  return (
    <article
      className="border rounded-lg shadow hover:shadow-lg transition-transform duration-500 ease-in-out"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link
        href={`/products/${product.id}`}
        aria-label={`Перейти на страницу товара ${product.title}`}
        className="block p-4 flex flex-col gap-2"
      >
        <h2 className="text-xl font-semibold truncate overflow-hidden whitespace-nowrap text-ellipsis">
          {product.title}
        </h2>
        <div className="relative h-56 overflow-hidden">
          <ProductImage src={src} alt={product.title} width={300} height={200} className="w-full h-full" />
        </div>
        <p className="font-bold text-lg">{product.price} $</p>
      </Link>
    </article>
  );
};
