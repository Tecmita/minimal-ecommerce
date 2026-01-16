import { useEffect } from "react";
import ProductCard from "../components/product/ProductCard";
import Pagination from "../components/Pagination";
import { useProducts } from "../hooks/useProducts";
import { useIsMobile } from "../hooks/useIsMobile";
import { useProductFilter } from "../hooks/useProductFilter";
import ProductHeader from "../components/product/ProductHeader";
import { useSearch } from "../context/SearchContext";
import { useSearchParams } from "react-router-dom";
import ProductButtonFilter from "../components/product/ProductButtonFilter";

function ProductsPage() {
  const isMobile = useIsMobile();
  const { search } = useSearch();
  const [params] = useSearchParams();
  const selectedCategory = params.get("category") || "all";

  const {
    products,
    allProductsForCategories,
    error: productError,
    loading: loadingProduct,
    limit,
    setPage,
    page,
    total,
  } = useProducts(isMobile);

  useEffect(() => {
    if (!isMobile) return;

    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;

      if (nearBottom) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile, setPage]);
  const { category, filteredProducts, categories, setCategory } =
    useProductFilter(
      allProductsForCategories,
      search,
      allProductsForCategories,
      selectedCategory
    );

  if (productError) return <h2>{productError}</h2>;

  const productsToShow = filteredProducts.slice(
    0,
    Math.min(page * limit, filteredProducts.length)
  );
  return (
    <>
      <ProductHeader category={category} />

      <ProductCard products={productsToShow} loading={loadingProduct} />

      {!isMobile && (
        <Pagination
          page={page}
          total={filteredProducts.length}
          limit={limit}
          onPageChange={setPage}
        />
      )}
    </>
  );
}

export default ProductsPage;
