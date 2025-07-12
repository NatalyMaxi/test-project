import { notFound } from 'next/navigation';

import { Gallery } from '@/components';
import { fetchProductById } from '@/utils/api/products';
import { Product } from '@/utils/api/types';
import { PRODUCT_PAGE_LOAD_ERROR } from '@/utils/api/constants';

interface Props {
  params: Promise<{ id: string }>;
}

function isValidUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export default async function ProductPage({ params }: Props) {
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
    <main className="p-4 max-w-7xl mx-auto">
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
