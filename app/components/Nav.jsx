import React from "react";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

const Nav = () => {
  return (
    <header>
      {/* Menu items */}
      <nav className="w-screen flex items-center justify-between px-[20vw] bg-slate-50 h-16">
        {/* Logo */}
        <div className="">LOGO</div>
        {/* Logo */}

        {/* Menu List */}
        <ul className="flex items-center">
          <li className="relative list h-16 px-5 flex items-center justify-center">
            <a href="">Home</a>
            <div className="line w-full absolute bottom-0 bg-black h-1"></div>
          </li>
          <li className="relative list h-16 px-5 flex items-center justify-center">
            <a href="">Shop</a>
            <div className="line w-full absolute bottom-0 bg-black h-1"></div>
          </li>
          <li className="relative list h-16 px-5 flex items-center justify-center">
            <a href="">About</a>
            <div className="line w-full absolute bottom-0 bg-black h-1"></div>
          </li>
          <li className="relative list h-16 px-5 flex items-center justify-center">
            <a href="">Contact</a>
            <div className="line w-full absolute bottom-0 bg-black h-1"></div>
          </li>
        </ul>
        {/* Menu List */}

        {/* Extras */}
        <div className="flex gap-10 items-center text-white">
          <div className="w-5 h-5 cursor-pointer">
            <MagnifyingGlassIcon size={24} color="black" />
          </div>
          <div className="w-5 h-5 cursor-pointer">
            <ShoppingBagIcon size={24} color="black" />
          </div>
        </div>
        {/* Extras */}
      </nav>
      {/* Menu items */}
    </header>
  );
};

export default Nav;
