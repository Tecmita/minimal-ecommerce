import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import { useProducts } from "./hooks/useProducts";

function App() {
  const {
    products,
    error: productError,
    loading: loadingProduct,
  } = useProducts();

  if (productError) return <h2>{productError}</h2>;

  return (
    <>
      <ProductCard products={products} loading={loadingProduct} />
    </>
  );
}

export default App;
