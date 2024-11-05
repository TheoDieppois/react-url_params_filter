import { products } from "./data/products";

export const getProducts = async () => {
  // Add delay to mimic API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return products;
};
