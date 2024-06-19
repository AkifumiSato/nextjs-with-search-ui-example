import { Suspense } from "react";
import { ProductSearchResults } from "./_components/product-search-results";
import { Search } from "./_components/search";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query;
  return (
    <>
      <h1>Hello, Search UI</h1>
      <Search />
      {query && (
        <Suspense key={query} fallback={<div>Loading...</div>}>
          <ProductSearchResults query={query} />
        </Suspense>
      )}
      {!query && <p>Enter a search term to see results.</p>}
    </>
  );
}
