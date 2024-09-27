import React from "react";
import ProductCard from "./ProductCard";

const RelatedProducts = () => {
  return (
    <div className=" gap-5   w-full border-t border-[#6d6d6d] border-opacity-25   overflow-hidden">
      <h3 className="font-bold text-[3vw]"> Related Products</h3>
      <div className="flex   w-full   justify-between   flex-wrap overflow-hidden">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default RelatedProducts;
