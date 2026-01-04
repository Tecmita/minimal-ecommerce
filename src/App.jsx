import { useState } from "react";
import ProductCard from "./components/ProductCard";
import { useProducts } from "./hooks/useProducts";

function App() {
  const {
    products,
    error: productError,
    loading: loadingProduct,
  } = useProducts();

  if (loadingProduct) return <h2>Cargando</h2>;
  if (productError) return <h2>{productError}</h2>;
  return (
    <>
      <ProductCard products={products} />
    </>
  );
}

export default App;
