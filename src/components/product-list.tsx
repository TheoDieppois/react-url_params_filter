import { FC } from "react";
import { Product } from "../types/product";

type ProductListProps = {
  products: Product[];
};

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <div className="flex flex-wrap gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-grayscale-700 flex w-[250px] flex-col gap-4 rounded-lg p-4"
        >
          <div className="flex justify-between">
            <div>
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="opaicty-80">{product.category}</p>
            </div>
            <p>{product.price}€</p>
          </div>

          <img src={product.image} className="rounded-md" alt={product.name} />
        </div>
      ))}
    </div>
  );
};

export { ProductList };
