export interface Products {
  categories: Array<Category>;
  products: Array<Product>;
}

export interface Product {
  name: string;
  itemLeft: number;
  price: number;
  categories: Array<number>;
}

export interface Category {
  categoryId: number;
  categoryName: string;
}
