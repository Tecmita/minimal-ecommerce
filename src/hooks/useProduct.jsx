import { use, useEffect, useState } from "react";
import { getProductsbyId } from "../services/product.service";

export const useProduct = (id) => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const loadProduct = async () => {
      try {
        const data = await getProductsbyId(id);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  return { product, error, loading };
};
