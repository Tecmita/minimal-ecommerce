import React from "react";

const ProductCardSkeleton = () => {
  return (
    <section className="px-6 py-4">
      <article className="flex flex-col animate-pulse">
        <div className="rounded overflow-hidden">
          <div className="w-full aspect-square bg-gray-200 rounded-3xl" />

          <div className="px-4 py-2 flex flex-col gap-2">
            <div className="h-4 w-24 bg-gray-300 rounded" />
            <div className="h-4 w-full bg-gray-300 rounded" />
            <div className="h-3 w-5/6 bg-gray-200 rounded" />
          </div>
        </div>
      </article>
    </section>
  );
};

export default ProductCardSkeleton;
