import { FC, useEffect, useState } from "react";
import { ProductFilters } from "../api/products";
import { useDebounce } from "../hooks/useDebounce";

type ProductListFiltersProps = {
  onChange: (filters: ProductFilters) => void;
};

const ProductListFilters: FC<ProductListFiltersProps> = ({ onChange }) => {
  const [search, setSearch] = useState<ProductFilters["search"]>();
  const debouncedSearch = useDebounce(search);

  const [category, setCategory] = useState<ProductFilters["category"]>();
  const [maxPrice, setMaxPrice] = useState<ProductFilters["maxPrice"]>();

  useEffect(() => {
    onChange({ category, maxPrice, search: debouncedSearch });
  }, [category, debouncedSearch, maxPrice]);

  return (
    <div className="mb-6 flex flex-row gap-2">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Rechercher un produit ..."
      />
      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value as ProductFilters["category"])
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
          setMaxPrice(e.target.value ? parseInt(e.target.value) : undefined)
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
