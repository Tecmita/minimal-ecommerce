import React, { useState } from "react";

const ProductButtonFilter = ({ category, setCategory, categories }) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="mb-6">
      <div className="flex justify-center items-center mt-2">
        <div className="">
          <button
            onClick={handleToggle}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            {open ? "X" : "Category"}
          </button>
        </div>
      </div>

      {/* Lista cat open = true */}
      {open && (
        <div className="flex gap-2 flex-col mt-2 items-center  ">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`min-w-[12rem] px-4 py-2 rounded ${
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

export default ProductButtonFilter;
