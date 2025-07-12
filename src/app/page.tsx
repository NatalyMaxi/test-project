'use client';

import { useEffect, useState, useCallback } from 'react';

import { SortProducts, Loader, ProductList } from '@/components';
import { Product } from '@/utils/types/product';
import { SortByType } from '@/utils/types/sort';
import { fetchAllProducts } from '@/api/products';
import { PRODUCT_FETCH_ALL_ERROR } from '@/utils/constants/api';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<SortByType>(SortByType.DEFAULT);
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const fetchedData = await fetchAllProducts();
      setAllProducts(fetchedData);
    } catch (e: unknown) {
      console.error(PRODUCT_FETCH_ALL_ERROR, e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const sortProducts = useCallback((productsToSort: Product[], sortType: SortByType) => {
    const dataToSort = [...productsToSort];

    if (sortType === SortByType.PRICE_ASC) {
      dataToSort.sort((a, b) => a.price - b.price);
    } else if (sortType === SortByType.PRICE_DESC) {
      dataToSort.sort((a, b) => b.price - a.price);
    }

    return dataToSort;
  }, []);

  useEffect(() => {
    setProducts(sortProducts(allProducts, sortBy));
  }, [allProducts, sortBy, sortProducts]);

  const handleSort = useCallback((sortBy: SortByType) => {
    setSortBy(sortBy);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
        <h1 className="text-3xl font-bold mb-2 sm:mb-0">Список продуктов</h1>
        <SortProducts onSort={handleSort} />
      </div>
      <ProductList products={products} />
    </div>
  );
}
