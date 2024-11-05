import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./api/products";
import { ProductList } from "./components/product-list";
import { ProductListSkeleton } from "./components/product-list-skeleton";

const App = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Produits</h1>

      {data && <ProductList products={data} />}
      {isFetching && <ProductListSkeleton />}
    </div>
  );
};

export default App;
