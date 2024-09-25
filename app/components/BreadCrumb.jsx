import React from "react";

const BreadCrumb = () => {
  return (
    <div className="w-full hidden h-[25vh] bg-white shadow-gray-200 shadow md:flex items-center justify-center flex-col pb-10">
      <p className="font-bold mt-auto text-5xl pb-3">Product</p>
      <div className="flex gap-3">
        <p className="text-[#6d6d6d]">{"Home >"}</p>
        <p className="text-[#6d6d6d]">{"Products >"}</p>
        <p className="text-[#6d6d6d]">{"NTW 054"}</p>
      </div>
    </div>
  );
};

export default BreadCrumb;
