import { notFound } from 'next/navigation';

import { Gallery } from '@/components';
import { fetchProductById } from '@/utils/api/products';
import { Product } from '@/utils/api/types';
import { PRODUCT_PAGE_LOAD_ERROR } from '@/utils/api/constants';
import { isValidUrl } from '@/utils/helpers/url';

interface IProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: IProductPageProps) {
  const { id } = await params;

  let product: Product;
  try {
    product = await fetchProductById(id);
  } catch (error) {
    console.error(PRODUCT_PAGE_LOAD_ERROR, error);
    notFound();
  }

  const images = product.images.filter(isValidUrl);

  return (
    <main className="w-full">
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="text-xl sm:text-2xl font-bold">{product.title}</h1>

        <p>
          Категория: <span className="font-bold">{product.category.name}</span>
        </p>
        <p>
          Цена: <span className="font-bold">{product.price} $</span>
        </p>
      </div>

      {images?.length > 0 && <Gallery images={images} alt={product.title} />}

      <p className="mb-4">{product.description}</p>
    </main>
  );
}
