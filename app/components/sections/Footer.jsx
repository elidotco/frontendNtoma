import React from "react";
import logo from "@/public/ntomawura.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" w-screen min-h-[50vh]  lg:px-[20vw] py-20 flex md:justify-between flex-col md:flex-row justify-center items-center">
      <div className="flex flex-col  lg:w-1/5 justify-start ">
        <div className="flex flex-col justify-start">
          <h3 className="font-semibold pb-6 text-xl">Contact</h3>
          <div className="">
            Ntomawura
            <br /> Haatso,
            <br /> Accra,
            <br /> Ghana
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="w-full bg-white h-10 mt-5"></div>
        {/* Social Media Icons */}
      </div>
      <div className="flex w-[40%] flex-col gap-10 md:flex-row md:gap-0 ">
        <div className="flex w-full flex-1 flex-col">
          <h3 className="font-semibold pb-12 text-xl">Get our news</h3>
          <div className="flex-col flex gap-y-7">
            <input
              type="email"
              placeholder="Email"
              className="full  px-5 h-12 border-[0.5px] border-black bg-gray-100 outline-none"
              reqiured
            />

            <button
              type="button"
              className="w-w-full h-12 text-white font-semibold outline-none bg-black"
            >
              Subribe
            </button>
          </div>
        </div>
        <div className="flex flex-col text-left pl-10 w-fit h-fit ">
          <h3 className="font-semibold pb-12 text-xl -ml-5 ">Useful links</h3>
          <ul className="list-disc font-light flex flex-col gap-2">
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-1/3 h-full flex items-center justify-center">
        <Image src={logo} alt="logo" className="w-2/5 h-full" />
      </div>
    </footer>
  );
};

export default Footer;
