import React, { useState } from "react";

const ProductButtonFilter = ({ category, setCategory, categories }) => {
  return (
    <div className="mb-6 grid grid-cols-2 gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-4 py-2 rounded ${
            category === cat ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setCategory(cat)}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
};
export default ProductButtonFilter;
