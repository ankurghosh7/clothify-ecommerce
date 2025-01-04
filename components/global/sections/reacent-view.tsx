import React from "react";
import ProductCard from "../product-card";

const ReacentView = async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=5");
  const products = await res.json();
  console.log(products);
  return (
    <div className="space-y-8">
      <h2 className="text-center md:text-2xl lg:text-4xl font-semibold">
        Recent View
      </h2>
      <div className="flex flex-wrap justify-between gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ReacentView;
