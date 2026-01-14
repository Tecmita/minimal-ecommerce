import React, { useEffect, useState } from "react";
import { useProduct } from "../hooks/useProduct";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import ProductCardSkeleton from "../components/product/ProductCardSkeleton.jsx";
import { ShoppingCartSimple } from "phosphor-react";
import ProductHeader from "../components/product/ProductHeader.jsx";

const ProductPage = () => {
  const { id } = useParams();
  const { product, loading, error } = useProduct(id);
  const { addToCart } = useCart();

  if (loading) return <ProductCardSkeleton />;
  if (error) return <p>{error}</p>;
  return (
    <>
      <ProductHeader category={product.category} />
      <div className="px-6 py-4">
        <div className="max-w-6-xl mx-auto">
          <div>
            <div className="flex items-center justify-center bg-[#f5f5f5] rounded-4xl relative">
              <img src={product.thumbnail} alt={product.title} />
              <button
                className="
                bg-white h-8 w-8 rounded-full flex items-center justify-center absolute bottom-4 right-4"
                onClick={() => {
                  addToCart(product);
                }}
              >
                <ShoppingCartSimple size={18} />
              </button>
            </div>
            <div className="mt-4">
              <div>
                <h2 className="font-bold text-base">${product.price}</h2>
                <h2 className="py-2 text-base font-semibold">
                  {product.title}
                </h2>
              </div>
              <p className="text-justify text-xs text-[#868D94]">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
