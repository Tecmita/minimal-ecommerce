import { useEffect, useState } from "react";
import { getProducts } from "../services/product.service";

const LIMIT = 8;

export const useProducts = (isMobile) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const skip = (page - 1) * LIMIT;
        const data = await getProducts({ limit: LIMIT, skip });

        setProducts((prev) =>
          isMobile && page > 1 ? [...prev, ...data.products] : data.products
        );

        setTotal(data.total);

        const loaded = skip + data.products.length;
        setHasMore(loaded < data.total);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [page, isMobile]);
  useEffect(() => {
    if (!isMobile || !hasMore || loading) return;

    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;

      if (nearBottom) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile, hasMore, loading]);
  return {
    products,
    error,
    loading,
    page,
    setPage,
    hasMore,
    total,
    limit: LIMIT,
  };
};
