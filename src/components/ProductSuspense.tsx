import { Product } from "@prisma/client";
import ProductCard from "./ProductCard";

interface ProductCardProps {
    id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    images: string;
}

export const ProductSuspense = async ({
    products,
  }: {
    products: ProductCardProps[];
  }) => {
    return products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  };