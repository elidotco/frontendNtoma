import React from "react";

const ProCartCard = () => {
  return (
    <div className="">
      <div className="flex justify-between border-b border-gray-200 items-center">
        <div className="flex items-center flex-1">
          {/* Image */}

          <div className="w-[30%] h-20 bg-black"></div>
          {/* Image */}
          <flex className="flex-col">
            <p>NTW 054</p>
            <p>Price </p>
          </flex>
        </div>
        <div className="border-l flex items-center">&200</div>
      </div>
      <div className="flex justify-between items-center px-10">
        <div className="w-1/5 h-10 bg-gray-900"></div>
        <p>Remove</p>
      </div>
    </div>
  );
};

export default ProCartCard;
