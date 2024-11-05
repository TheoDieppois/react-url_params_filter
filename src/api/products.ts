import { z } from "zod";
import { products } from "./data/products";

export const productFiltersSchema = z.object({
  category: z.enum(["sport", "food", "tech"]).optional(),
  maxPrice: z.number().optional(),
  search: z.string().optional(),
});

export type ProductFilters = z.infer<typeof productFiltersSchema>;

export const getProducts = async (options?: ProductFilters) => {
  // Add delay to mimic API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  let filteredProducts = products;

  if (options?.category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === options.category,
    );
  }

  if (options?.maxPrice) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= options.maxPrice!,
    );
  }

  if (options?.search) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name
        .toLocaleLowerCase()
        .includes(options.search!.toLocaleLowerCase()),
    );
  }

  return filteredProducts;
};
