import React from "react";
import ProductCard from "../ProductCard";

const ProductSection = () => {
  return (
    <div className="flex w-full md:px-[10vw] px-6 justify-between items-center  flex-wrap overflow-hidden">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductSection;
