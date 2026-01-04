import React from "react";

const ProductCard = ({ products }) => {
  return (
    <section className="px-6 py-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="flex flex-col transition-transform duration-300 ease-out hover:scale-[1.03] hover:cursor-pointer"
            >
              <div className="rounded overflow-hidden">
                <div className="w-full aspect-square  overflow-hidden bg-[#F5F5F5] rounded-3xl ">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    loading="lazy"
                    className="max-w-[80%] max-h-[80%] object-contain translate-x-3 "
                  />
                </div>
                <div className="px-4 py-2 flex flex-1 flex-col gap-2">
                  <p className="text-gray-700 text-base font-bold md:text-2xl lg:text-3xl xl:text-xl">
                    ${product.price}
                  </p>
                  <h2 className="text-base font-semibold line-clamp-2 md:text-2xl lg:text-3xl xl:text-xl">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-500 line-clamp-2 md:text-xl lg:text-2xl xl:text-xl">
                    {product.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
