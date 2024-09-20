"use client";

import React from "react";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from "@/public/ntomawura.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import ProCartCard from "./ProCartCard";

const Nav = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    console.log(isCartOpen);
  };

  useEffect(() => {
    if (isCartOpen) {
      // Prevent scrolling when the cart is open
      document.body.style.overflow = "hidden";
    } else {
      // Restore scrolling when the cart is closed
      document.body.style.overflow = "";
    }

    // Clean up on component unmount or when cart closes
    return () => {
      document.body.style.overflow = "";
    };
  }, [isCartOpen]);
  return (
    <header className="w-full h-fit">
      <div className=" w-full mt-20"></div>
      {/* Menu items */}
      <nav className="w-screen overflow-hidden flex items-center justify-between px-[20vw] bg-[#fff] h-20 shadow-gray-200 z-10 shadow top-0 left-0 bg-opacity-95 fixed">
        {/* Logo */}
        <div className=" italic font-semibold text-2xl w-16 h-16">
          <Image src={logo} alt="logo" className="w-full h-full" />
        </div>
        {/* Logo */}

        {/* Menu List */}
        <ul className="flex items-center">
          <li className="relative list h-20 px-5 flex items-center justify-center">
            <a href="">Home</a>
            <div className="line w-full absolute bottom-0 bg-black h-1"></div>
          </li>
          <li className="relative list h-20 px-5 flex items-center justify-center">
            <a href="">Shop</a>
            <div className="line w-full absolute bottom-0 bg-black h-1"></div>
          </li>
          <li className="relative list h-20 px-5 flex items-center justify-center">
            <a href="">About</a>
            <div className="line w-full absolute bottom-0 bg-black h-1"></div>
          </li>
          <li className="relative list h-20 px-5 flex items-center justify-center">
            <a href="">Contact</a>
            <div className="line w-full absolute bottom-0 bg-black h-1"></div>
          </li>
        </ul>
        {/* Menu List */}

        {/* Extras */}
        <div className="flex gap-6 items-center text-white">
          <div className="w-5 h-5 cursor-pointer text-gray-600 hover:text-black transition-all duration-100">
            <MagnifyingGlassIcon size={24} color="" />
          </div>
          <div className=" cursor-pointer text-gray-600 hover:text-black transition-all duration-100 flex items-center ">
            <div className="w-5 h-5 " onClick={() => toggleCart()}>
              <ShoppingBagIcon size={24} color="" />
            </div>
            {/* Cart Items */}
            <div className="pl-1 text-lg font-medium text-black">0</div>
            {/* Cart Items */}
          </div>
        </div>
        {/* Extras */}
      </nav>
      {/* Menu items */}

      {/* Cart */}
      <div
        className={`w-screen h-screen fixed top-0 left-0 z-40 bg-gray-900 bg-opacity-50 ${
          isCartOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div
          className={`w-full md:w-[22%] absolute top-0 right-0 h-screen bg-white bg-opacity-100  ${
            isCartOpen ? "translate-x-0" : "translate-x-full"
          } `}
        >
          {/* header */}
          <div className="border-b  h-[10%] p-5 flex items-center">
            {/* Close Button */}
            <div className=" w-8 h-8 cursor-pointer font-light text-2xl text-gray-400  hover:rotate-360 hover:text-black transition-transform duration-500">
              <XMarkIcon size={20} />
            </div>
            {/* Close Button */}
            <div className="mx-auto flex items-center">
              <div className="w-6 h-6 text-gray-500">
                {" "}
                <ShoppingBagIcon />
              </div>
              <p className="text-2xl font-bold text-black">Cart</p>
            </div>
          </div>
          {/* header */}
          {/* items Sections */}
          <div className="px-5 py-5 h-screen overflow-auto">
            <ProCartCard />
            <ProCartCard />
            <ProCartCard />
            <ProCartCard />
            <ProCartCard />
            <ProCartCard />
            <ProCartCard />
            <ProCartCard />
            <ProCartCard />
          </div>
          {/* items Sections */}
          {/* Checkout Sec */}
          <div className="h-[27%] w-full mt-auto absolute px-4 bottom-0 bg-gray-100">
            <div className=" border-b border-gray-300 w-full py-5">
              <div className="flex w-full items-center justify-between">
                <p>SubTotal</p>
                <p>&200</p>
              </div>
              <div className="flex w-full items-center justify-between">
                <p>Delivery</p>
                <p>Free!</p>
              </div>
            </div>
            <div className="flex w-full py-5 items-center justify-between">
              <p>Total</p>
              <p className="text-2xl font-bold">&200</p>
            </div>
            <button className="w-full border-none bg-black font-semibold text-white flex items-center justify-center py-2">
              Proceed To Checkout
            </button>
            <p className="text-center text-gray-600 py-2">
              <a href="#">View Cart</a>
            </p>
          </div>
          {/* Checkout Sec */}
        </div>
      </div>
      {/* Cart */}
    </header>
  );
};

export default Nav;
