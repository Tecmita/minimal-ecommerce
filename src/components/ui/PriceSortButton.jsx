import React from "react";

const PriceSortButton = ({ sortPrice, setSortPrice }) => {
  return (
    <div>
      <h2>Ordenar por</h2>
      <button
        className={`px-4 py-2 rounded-md transition-all ${
          sortPrice === "asc" ? "text-black " : "text-[#999]"
        }`}
        onClick={() => setSortPrice("asc")}
      >
        Mayor Precio
      </button>
      <button
        className={`px-4 py-2 rounded-md transition-all ${
          sortPrice === "desc" ? "text-black" : "text-[#999]"
        }`}
        onClick={() => setSortPrice("desc")}
      >
        Menor Precio
      </button>
    </div>
  );
};

export default PriceSortButton;
