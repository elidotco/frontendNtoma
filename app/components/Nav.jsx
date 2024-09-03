import React from "react";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import logo from "@/public/ntomawura.png";
import Image from "next/image";

const Nav = () => {
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
            <div className="w-5 h-5 ">
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
    </header>
  );
};

export default Nav;
