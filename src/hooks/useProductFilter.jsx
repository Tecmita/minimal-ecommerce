import { useState, useMemo } from "react";
import { useSearch } from "../context/SearchContext";

export const useProductFilter = (products, search) => {
  const [category, setCategory] = useState("all");
  const [sortPrice, setSortPrice] = useState("");

  const categories = useMemo(() => {
    return ["all", ...new Set(products.map((p) => p.category))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchSearch = product.title
        .toLowerCase()
        .includes((search ?? "").toLowerCase());

      const matchCategory = category === "all" || product.category === category;

      return matchSearch && matchCategory;
    });

    if (sortPrice === "asc") {
      result = result.sort((a, b) => a.price - b.price);
    } else if (sortPrice === "desc") {
      result = result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, search, category, sortPrice]);

  return {
    setCategory,
    filteredProducts,
    categories,
    sortPrice,
    setSortPrice,
  };
};
