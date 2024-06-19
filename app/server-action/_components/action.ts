"use server";

import type { Product, SearchResult } from "../../type";

export async function searchProducts(_prev: Product[], formData: FormData) {
  const query = formData.get("query") as string;

  if (!query) return [];

  const { products } = await fetchProducts(query);
  console.log({ products });
  return products;
}

async function fetchProducts(query: string) {
  return fetch(`https://dummyjson.com/products/search?q=${query}`).then(
    (res) => res.json() as Promise<SearchResult>,
  );
}
