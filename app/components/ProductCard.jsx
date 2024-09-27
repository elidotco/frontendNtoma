import React from "react";

const ProductCard = () => {
  return (
    <div className="xl:w-[24%] w-[49%] md:w-[44%] md:flex-1 md:mr-5 h-fit py-10 bg-transparent cursor-pointer  my-auto">
      {/* General width will have to be changed later */}
      {/* Product Image */}
      <div className="w-full h-40 md:h-72 bg-green-300"></div>

      {/* Product Image */}

      {/* Product Details */}
      <div className="flex py-3 flex-col gap-y-3 ">
        <p className="font-bold text-2xl">Ntoma Pa</p> {/* Product Name */}
        <p className="text-gray-500 text-lg">$440</p> {/* Product Price */}
      </div>
      {/* Product Details */}
    </div>
  );
};

export default ProductCard;
