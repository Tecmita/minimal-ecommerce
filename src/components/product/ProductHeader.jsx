import React, { useState } from "react";
import SearchFilter from "../SearchFilter";
import BackButton from "../ui/BackButton";
import ForwardButton from "../ui/ForwardButton";

const ProductHeader = ({ category }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <>
      <div className=" grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 mt-4 mx-2">
        <BackButton />

        <div className="relative h-8 flex items-center justify-center">
          <span className="capitalize">{category}</span>
        </div>
        <ForwardButton />
      </div>
    </>
  );
};

export default ProductHeader;
