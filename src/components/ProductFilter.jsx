import React from "react";

const ProductFilter = ({ search, setSearch }) => {
  const handleButton = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="buscar texto"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default ProductFilter;
