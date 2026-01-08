import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import ProductFilter from "../components/ProductFilter";
import ProductButton from "../components/ProductButtons";

import { useProducts } from "../hooks/useProducts";
import { useIsMobile } from "../hooks/useIsMobile";
import { useProductFilter } from "../hooks/useProductFilter";

function ProductsPage() {
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

  const {
    search,
    setSearch,
    category,
    setCategory,
    filteredProducts,
    categories,
  } = useProductFilter(products);

  if (productError) return <h2>{productError}</h2>;

  return (
    <>
      <ProductButton
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        categories={categories}
      />
      <ProductFilter search={search} setSearch={setSearch} />
      <ProductCard products={filteredProducts} loading={loadingProduct} />
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

export default ProductsPage;
