import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import { useProducts } from "./hooks/useProducts";
import Pagination from "./components/Pagination";
import { useIsMobile } from "./hooks/useIsMobile";

function App() {
  const isMobile = useIsMobile();

  const {
    products,
    error: productError,
    loading: loadingProduct,
    limit,
    setPage,
    page,
    total,
  } = useProducts(isMobile);

  if (productError) return <h2>{productError}</h2>;

  return (
    <>
      <ProductCard products={products} loading={loadingProduct} />
      {!isMobile && (
        <Pagination
          page={page}
          total={total}
          limit={limit}
          onPageChange={setPage}
        />
      )}
    </>
  );
}

export default App;
