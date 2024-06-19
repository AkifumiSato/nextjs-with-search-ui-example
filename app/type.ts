export type Product = {
  id: string;
  title: string;
  category: string;
};

export type SearchResult = {
  products: Product[];
};
