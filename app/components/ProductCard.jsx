import React from "react";

const ProductCard = () => {
  return (
    <div className="w-[22%] h-fit py-10 bg-transparent cursor-pointer  my-auto">
      {/* General width will have to be changed later */}
      {/* Product Image */}
      <div className="w-full h-64 bg-green-300"></div>

      {/* Product Image */}

      {/* Product Details */}
      <div className="flex py-5 flex-col gap-y-3 px-5">
        <p className="font-bold text-2xl">Ntoma Pa</p> {/* Product Name */}
        <p className="text-gray-500 text-lg">$440</p> {/* Product Price */}
      </div>
      {/* Product Details */}
    </div>
  );
};

export default ProductCard;
