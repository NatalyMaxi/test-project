import { API_BASE_URL, CATEGORY_FETCH_ERROR, PRODUCT_FETCH_ERROR } from '@/utils/constants/api';
import { Product, Category } from '@/utils/types/product';

export async function fetchAllProducts(): Promise<Product[]> {
  const res = await fetch(`${API_BASE_URL}/products`);

  if (!res.ok) {
    throw new Error(PRODUCT_FETCH_ERROR);
  }

  return res.json();
}

export async function fetchAllCategories(): Promise<Category[]> {
  const res = await fetch(`${API_BASE_URL}/categories`);

  if (!res.ok) {
    throw new Error(CATEGORY_FETCH_ERROR);
  }

  return res.json();
}
