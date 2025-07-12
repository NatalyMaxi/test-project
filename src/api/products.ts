import { API_BASE_URL, PRODUCT_FETCH_ERROR } from '@/utils/constants/api';
import { Product } from '@/utils/types/product';

export async function fetchAllProducts(): Promise<Product[]> {
  const res = await fetch(`${API_BASE_URL}/products`);

  if (!res.ok) {
    throw new Error(PRODUCT_FETCH_ERROR);
  }

  return res.json();
}
