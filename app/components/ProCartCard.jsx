import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const ProCartCard = () => {
  const [quantity, setQuantity] = useState(1);
  const ProductIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const ProductDecrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  return (
    <div className=" bg-gray-50  mb-5 p-5">
      <div className="flex justify-between border-b  border-gray-200 items-center">
        <div className="flex items-center flex-1">
          {/* Image */}

          <div className="w-[35%] h-24 bg-black"></div>
          {/* Image */}
          <flex className=" ml-3 flex-col">
            <p>NTW 054</p>
            <p>Price </p>
          </flex>
        </div>
        <div className="border-l flex items-center font-bold">&200</div>
      </div>
      <div className="flex justify-between items-center px-7 pt-3">
        <div className="w-[45%] h-10 border-[.5px] px-3 border-black  flex items-center justify-between text-sm flex-row-reverse">
          <div
            className="w-4 h-4 cursor-pointer"
            onClick={() => ProductIncrease()}
          >
            {" "}
            <PlusIcon size={20} />
          </div>
          <p className="text-xl font-semibold">{quantity}</p>
          <div className="w-4 h-4">
            <MinusIcon size={20} />
          </div>
        </div>
        <p>Remove</p>
      </div>
    </div>
  );
};

export default ProCartCard;
