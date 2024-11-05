import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products";
import { ProductList } from "../components/product-list";
import { ProductListFilters } from "../components/product-list-filters";
import { ProductListSkeleton } from "../components/skeletons/product-list-skeleton";
import { useProductFilters } from "../hooks/useProductFilters";

const HomePage = () => {
  const { search, category, maxPrice } = useProductFilters();

  const { data, isLoading } = useQuery({
    queryKey: ["products", { search, category, maxPrice }],
    queryFn: () => getProducts({ search, category, maxPrice }),
  });

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Produits</h1>

      <ProductListFilters />
      {data && <ProductList products={data} />}
      {isLoading && <ProductListSkeleton />}
    </div>
  );
};

export default HomePage;
