import React from "react";

const ProductCard = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <div>
            <img src={product.thumbnail} loading="lazy" />
          </div>
          <h2>{product.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
