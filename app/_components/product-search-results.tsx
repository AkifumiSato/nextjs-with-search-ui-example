export async function ProductSearchResults({
  query,
}: {
  query: string;
}) {
  const res = await fetchProducts(query);

  return (
    <div>
      <h2>Suggestions</h2>
      <ul>
        {res?.products.map((product) => (
          <li key={product.id}>
            {product.title} ({product.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

async function fetchProducts(query: string) {
  return fetch(`https://dummyjson.com/products/search?q=${query}`).then(
    (res) => res.json() as Promise<SearchResult>,
  );
}

type Product = {
  id: string;
  title: string;
  category: string;
};

type SearchResult = {
  products: Product[];
};
