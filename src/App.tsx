import { useQuery } from "@tanstack/react-query";
import { getProducts, ProductFilters } from "./api/products";
import { ProductList } from "./components/product-list";
import { ProductListSkeleton } from "./components/skeletons/product-list-skeleton";
import { ProductListFilters } from "./components/product-list-filters";
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState<ProductFilters["search"]>();
  const [category, setCategory] = useState<ProductFilters["category"]>();
  const [maxPrice, setMaxPrice] = useState<ProductFilters["maxPrice"]>();

  const { data, isLoading } = useQuery({
    queryKey: ["products", { search, category, maxPrice }],
    queryFn: () => getProducts({ search, category, maxPrice }),
  });

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Produits</h1>

      <ProductListFilters
        onChange={(filters) => {
          setSearch(filters.search);
          setCategory(filters.category);
          setMaxPrice(filters.maxPrice);
        }}
      />
      {data && <ProductList products={data} />}
      {isLoading && <ProductListSkeleton />}
    </div>
  );
};

export default App;
