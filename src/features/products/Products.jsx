import { useMemo } from "react";
import products from "../../data/products.json";
import ProductCard from "./components/ProductCard";
import { usePagination } from "../../hooks/usePagination";
const Products = () => {
  const allProducts = useMemo(
    () => products.categories.flatMap((c) => c.products),
    [],
  );
  const { pageData } = usePagination(allProducts, 9);
  return (
    <main id="products" className="dashboard-main">
      <h1 className="page-head">Products</h1>
      <div className="flex gap-5 flex-wrap justify-center mt-4">
        {pageData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default Products;
