import { useState, useMemo } from "react";

export const useProductFilter = (products) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const categories = useMemo(() => {
    return ["all", ...new Set(products.map((p) => p.category))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory = category === "all" || product.category === category;

      return matchSearch && matchCategory;
    });
  }, [products, search, category]);

  return {
    search,
    setSearch,
    category,
    setCategory,
    filteredProducts,
    categories,
  };
};
