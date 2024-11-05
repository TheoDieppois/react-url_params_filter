import { useEffect, useState } from "react";
import { ProductFilters } from "../api/products";
import { useDebounce } from "../hooks/useDebounce";
import { useProductFilters } from "../hooks/useProductFilters";

const ProductListFilters = () => {
  const { search, maxPrice, category, setFilters } = useProductFilters();

  const [localSearch, setLocalSearch] =
    useState<ProductFilters["search"]>(search);
  const debouncedSearch = useDebounce(localSearch);

  useEffect(() => {
    setFilters({ search: debouncedSearch });
  }, [debouncedSearch]);

  return (
    <div className="mb-6 flex flex-row gap-2">
      <input
        type="text"
        value={localSearch}
        onChange={(e) => setLocalSearch(e.target.value)}
        placeholder="Rechercher un produit ..."
      />
      <select
        value={category}
        onChange={(e) =>
          setFilters({ category: e.target.value as ProductFilters["category"] })
        }
      >
        <option value="" selected disabled>
          Choisir une catégorie
        </option>
        <option value="sport">Sport</option>
        <option value="food">Nourriture</option>
        <option value="tech">Technologie</option>
      </select>
      <select
        value={maxPrice}
        onChange={(e) =>
          setFilters({
            maxPrice: e.target.value ? parseInt(e.target.value) : undefined,
          })
        }
      >
        <option value="" selected disabled>
          Choisir un prix max
        </option>
        <option value="100">100€</option>
        <option value="500">500€</option>
        <option value="1000">1000€</option>
      </select>
    </div>
  );
};

export { ProductListFilters };
