import React, { useEffect } from "react";
import { getProductsbyId } from "../services/product.service";
import { useProduct } from "../hooks/useProduct";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

const ProductPage = () => {
  const { id } = useParams();
  const { product, loading, error } = useProduct(id);
  const { addToCart } = useCart();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="px-6 py-4">
        <div className="max-w-6-xl mx-auto">
          <div>
            <img src={product.thumbnail} alt={product.name} />
            <div>
              <button
                className="bg-gray-600 p-4 rounded hover:"
                onClick={() => {
                  addToCart(product);
                }}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
