'use client';

import { useState, useEffect, useCallback } from 'react';

import { Loader, ProductList, ProductControls } from '@/components';
import { useFilteredAndSortedProducts } from '@/hooks/useFilteredAndSortedProducts';
import { Product, Category } from '@/utils/api/types';
import { SortByType } from '@/utils/types/sort';
import { fetchAllProducts, fetchAllCategories } from '@/utils/api/products';
import { PRODUCT_FETCH_ALL_ERROR, CATEGORY_FETCH_ERROR } from '@/utils/api/constants';

export default function Home() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { filteredProducts, setFilterCategory, setSortBy } = useFilteredAndSortedProducts({
    products: allProducts,
    initialFilterCategory: null,
    initialSortBy: SortByType.DEFAULT,
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [productsData, categoriesData] = await Promise.all([fetchAllProducts(), fetchAllCategories()]);
        setAllProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        console.error(err);
        setError(`${PRODUCT_FETCH_ALL_ERROR}. ${CATEGORY_FETCH_ERROR}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSort = useCallback(
    (sortBy: SortByType) => {
      setSortBy(sortBy);
    },
    [setSortBy]
  );

  const handleFilter = useCallback(
    (categoryId: number | null) => {
      setFilterCategory(categoryId);
    },
    [setFilterCategory]
  );

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <main className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Список продуктов</h1>
      <ProductControls categories={categories} onSort={handleSort} onFilter={handleFilter} />
      <ProductList products={filteredProducts} />
      {filteredProducts.length === 0 && <p className="mt-4 text-center text-lg font-semibold">Товары не найдены</p>}
    </main>
  );
}
