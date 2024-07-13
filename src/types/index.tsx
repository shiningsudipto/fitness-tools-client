export interface TProduct {
  _id: string;
  name: string;
  price: number;
  description: string;
  images: string;
  category: string;
  stock: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ProductFilters {
  searchTerm?: string;
  categories?: string[];
  sortByPrice?: "asc" | "desc";
  price?: number;
}

export interface TProductFormValues {
  name: string;
  price: number;
  description: string;
  images: string;
  category: string;
  stock: number;
}
