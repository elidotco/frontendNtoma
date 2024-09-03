import React from "react";
import ProductCard from "../ProductCard";

const ProductSection = () => {
  return (
    <div className="flex px-[10vw] justify-between items-center gap-10 flex-wrap overflow-hidden">
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
