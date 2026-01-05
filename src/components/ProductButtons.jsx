import React, { useState } from "react";

const ProductButtons = ({ category, setCategory, categories }) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="mb-6">
      {/* Botón para mostrar/ocultar categorías */}
      <button
        onClick={handleToggle}
        className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
      >
        {open ? "Ocultar categorías" : "Ver categorías"}
      </button>

      {/* Lista de categorías de cat open = true */}
      {open && (
        <div className="flex gap-2 flex-wrap mt-2">
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
      )}
    </div>
  );
};

export default ProductButtons;
