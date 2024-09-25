"use client";

import Image from "next/image";
import Nav from "../components/Nav";
import ProductCard from "../components/ProductCard";
import BreadCrumb from "../components/BreadCrumb";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import RelatedProducts from "../components/RelatedProducts";

export default function Home() {
  const [quantity, setQuantity] = useState(1);
  const ProductIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const ProductDecrease = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };
  return (
    <main className="flex min-h-screen flex-col items-center pt-0">
      <Nav />
      <BreadCrumb />
      <div className="flex items-start w-full px-10 md:px-[20vw] py-10 flex-col md:flex-row">
        <div className="w-full md:w-[60%] h-[40vh] md:h-[60vh] bg-green-300"></div>
        <div className="w-full md:w-[40%] h-[60vh] py-10 md:py-10 md:pl-10  ">
          <div className="flex w-full py-5 items-center flex-col justify-between">
            <p className="text-3xl font-bold pb-5">NTW 054</p>
            <p className="text-2xl font-light ">&200</p>
          </div>
          <div className="flex gap-10">
            <div className="w-[45%] h-10 border-[.5px] px-3 border-[#6d6d6d]  flex items-center justify-between text-sm flex-row-reverse">
              <div
                className="w-4 h-4 cursor-pointer"
                onClick={() => ProductIncrease()}
              >
                {" "}
                <PlusIcon size={20} />
              </div>
              <p className="text-xl font-semibold">{quantity}</p>
              <div
                className="w-4 h-4 cursor-pointer"
                onClick={() => ProductDecrease()}
              >
                <MinusIcon size={20} />
              </div>
            </div>
            <button className="w-full border-none bg-black font-semibold text-white flex items-center justify-center py-2">
              Add to cart
            </button>
          </div>
          <p className="text-center pt-14 text-[#6d6d6d]">Category: Product</p>
          <div className=" w-full border-t border-opacity-40 border-[#6d6d6d] mt-10 pt-5 flex items-center justify-center"></div>
        </div>
      </div>
      {/* Related Products */}
      <section className="md:px-[20vw] px-10 w-full">
        {" "}
        <RelatedProducts />
      </section>
      {/* Related Products */}
    </main>
  );
}
