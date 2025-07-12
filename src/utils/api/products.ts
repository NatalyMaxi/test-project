import { apiFetch } from './client';
import { Category, Product } from './types';

export function fetchAllProducts(): Promise<Product[]> {
  return apiFetch<Product[]>('/products');
}

export function fetchAllCategories(): Promise<Category[]> {
  return apiFetch<Category[]>('/categories');
}

export function fetchProductById(id: string): Promise<Product> {
  return apiFetch<Product>(`/products/${id}`, { cache: 'no-store' });
}
