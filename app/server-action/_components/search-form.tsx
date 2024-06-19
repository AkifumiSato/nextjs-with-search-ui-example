"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useFormState } from "react-dom";
import { useDebouncedCallback } from "use-debounce";
import { searchProducts } from "./action";

export function SearchForm() {
  const [products, formAction] = useFormState(searchProducts, []);

  return (
    <div>
      <form action={formAction}>
        <label htmlFor="search">
          Search:&nbsp;
          <input type="search" name="query" />
        </label>
      </form>
      {products.length > 0 && (
        <div>
          <h2>Suggestions</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.title} ({product.category})
              </li>
            ))}
          </ul>
        </div>
      )}
      {products.length === 0 && <p>Enter a search term to see results.</p>}
    </div>
  );
}
