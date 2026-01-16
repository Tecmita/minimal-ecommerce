import { useState, useMemo } from "react";

export const useProductFilter = (
  products,
  search = "",
  allProducts = [],
  initialCategory = "all"
) => {
  const [category, setCategory] = useState(initialCategory);

  const categories = useMemo(() => {
    if (!Array.isArray(allProducts) || allProducts.length === 0) {
      return ["all"];
    }

    return [
      "all",
      ...Array.from(
        new Set(allProducts.map((p) => p.category?.trim()).filter(Boolean))
      ),
    ];
  }, [allProducts]);

  const filteredProducts = useMemo(() => {
    if (!Array.isArray(products)) return [];

    return products.filter((product) => {
      const matchSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory = category === "all" || product.category === category;

      return matchSearch && matchCategory;
    });
  }, [products, search, category]);

  return {
    category,
    setCategory,
    categories,
    filteredProducts,
  };
};
