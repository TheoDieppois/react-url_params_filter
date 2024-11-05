import { useSearchParams } from "react-router-dom";
import { ProductFilters, productFiltersSchema } from "../api/products";
import { useCallback } from "react";

export function useProductFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = {
    search: searchParams.get("s") ? searchParams.get("s") : undefined,
    category: searchParams.get("category")
      ? searchParams.get("category")
      : undefined,
    maxPrice: searchParams.get("maxPrice")
      ? parseInt(searchParams.get("maxPrice") as string)
      : undefined,
  };

  const { search, category, maxPrice } = productFiltersSchema.parse(filters);

  const setFilters = useCallback((filters: ProductFilters) => {
    setSearchParams((params) => {
      if (filters.search !== undefined) {
        params.set("s", filters.search);
      }

      if (filters.category) {
        params.set("category", filters.category);
      }

      if (filters.maxPrice) {
        params.set("maxPrice", filters.maxPrice.toString());
      }

      return params;
    });
  }, []);

  return {
    search,
    category,
    maxPrice,
    setFilters,
  };
}
