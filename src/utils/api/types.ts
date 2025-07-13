export interface Category {
  image: string;
  id: number;
  name: string;
  slug: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  category: Category;
  description?: string;
}
