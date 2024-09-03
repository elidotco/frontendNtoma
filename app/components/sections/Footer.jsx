import React from "react";

const Footer = () => {
  return (
    <footer className=" w-screen h-[50vh]  lg:px-[10vw] py-20 flex justify-between ">
      <div className="flex flex-col  lg:w-1/5 justify-start ">
        <div className="flex flex-col justify-start">
          <h3 className="font-semibold pb-10 text-xl">Contact</h3>
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
      <div className="flex w-[50%]  ">
        <div className="flex w-full flex-1 flex-col">
          <h3 className="font-semibold pb-10 text-xl">Get our news</h3>
          <div className="flex-col flex gap-y-7">
            <input
              type="text"
              placeholder="Email"
              className="full h-12 border-[0.5px] border-black bg-gray-100 outline-none"
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
          <h3 className="font-semibold pb-10 text-xl -ml-5 ">Useful links</h3>
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
      <div className="w h-full"></div>
    </footer>
  );
};

export default Footer;
