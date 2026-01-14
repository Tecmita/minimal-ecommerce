import ProductCard from "../components/product/ProductCard";
import Pagination from "../components/Pagination";
import { useProducts } from "../hooks/useProducts";
import { useIsMobile } from "../hooks/useIsMobile";
import { useProductFilter } from "../hooks/useProductFilter";
import ProductHeader from "../components/product/ProductHeader";
import { useSearch } from "../context/SearchContext";

function ProductsPage() {
  const isMobile = useIsMobile();

  const { search } = useSearch();

  const {
    products,
    error: productError,
    loading: loadingProduct,
    limit,
    setPage,
    page,
    total,
  } = useProducts(isMobile);

  const { category, filteredProducts } = useProductFilter(products, search);

  if (productError) return <h2>{productError}</h2>;

  return (
    <>
      <ProductHeader category={category || "Todos"} />

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
