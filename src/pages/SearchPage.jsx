import React from "react";
import { useSearch } from "../context/SearchContext";
import { useProducts } from "../hooks/useProducts";
import { useProductFilter } from "../hooks/useProductFilter";
import ProductButtonFilter from "../components/product/ProductButtonFilter";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const navigate = useNavigate();
  const { products, allProductsForCategories } = useProducts(false);

  const { category, setCategory, categories } = useProductFilter(
    products,
    "",
    allProductsForCategories,
    "all"
  );

  const handleSelectCategory = (cat) => {
    setCategory(cat);
    navigate(`/products?category=${cat}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-center text-xl mb-4">Buscar por categoría</h2>

      <ProductButtonFilter
        category={category}
        setCategory={handleSelectCategory}
        categories={categories}
      />
    </div>
  );
};

export default SearchPage;
