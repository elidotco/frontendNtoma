import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full">
      {/* Section One */}
      <section className="w-full   lg:h-[110vh] min-h-fit bg-black px-[20vw] flex justify-start items-center about-section-one">
        <div className="bg-white  h-[70vh] relative lg:w-[40%] md:w-[65%] w-full   px-[3vw] py-[2vw]">
          <h2 className="text-5xl font-bold pb-10">Shop Now and Enjoy</h2>
          <p className="text-light text-lg text-gray-900">
            Elevate your style with Ntomawura&apos;s hottest sale of the season!
            🌟 Dive into a world of exquisite fabrics, unrivaled quality, and
            unbeatable prices. Don&apos;t miss out on the chance to upgrade your
            wardrobe with timeless pieces that redefine elegance.
          </p>
          <a href="#">
            <div className="w-12 h-12 mt-auto absolute bottom-6 rounded-full flex items-center justify-center border-2 border-black">
              <div className="w-5 h-5 ">
                <ArrowRightIcon />
              </div>
            </div>
          </a>
        </div>
      </section>
      {/* Section One */}

      {/* Checks Section */}
      <div className="flex items-center flex-col md:flex-row justify-between gap-16 py-20 px-[10vw]">
        <div className="flex flex-col items-center checks">
          <div className="h-[100px] w-[150px] flex items-center flex-col justify-center  checksday">
            {/* Icon */}
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/truck--v1.png"
              alt="truck--v1"
            />
            {/* Icon */}
            <div className="line"></div>
          </div>
          <h3 className="font-bold text-xl py-5">7 days free return</h3>
          <p className="text-center">
            At Ntomawura, your satisfaction is our top priority, and we want you
            to shop with confidence. Introducing our hassle-free 7 Days Free
            Return policy, designed to ensure your peace of mind with every
            purchase
          </p>
        </div>
        <div className="flex flex-col items-center  checks">
          {/* Icon */}
          <div className="h-[100px] w-[150px] flex items-center flex-col justify-center   checksday">
            {" "}
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/pastel-glyph/128/box--v4.png"
              alt="box--v4"
            />
            <div className="line"></div>
          </div>
          {/* Icon */}
          <h3 className="font-bold text-xl py-5">24 hour Delivery</h3>
          <p className="text-center">
            At Ntomawura, we understand that when you find the perfect piece,
            you want to flaunt it ASAP. Introducing our 24-Hour Express Delivery
            service, ensuring your latest fashion finds reach your doorstep in
            no time!
          </p>
        </div>
        <div className="flex flex-col items-center  checks">
          <div className="h-[100px] w-[150px] flex items-center flex-col justify-center  checksday">
            {/* Icon */}
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/receive-cash.png"
              alt="receive-cash"
            />
            <div className="line"></div>
            {/* Icon */}
          </div>
          <h3 className="font-bold text-xl py-5">Easy Payment</h3>
          <p className="text-center">
            At Ntomawura, we believe that your fashion experience should be as
            smooth as your style. Introducing our Easy-Payment Options, ensuring
            you can shop with comfort, convenience, and confidence!
          </p>
        </div>
      </div>
      {/* Checks Section */}
      {/* Section two */}
      <section className="w-full lg:h-[110vh] min-h-fit bg-gray-400 px-[20vw] flex justify-start items-center about-section-one">
        <div className="bg-white lg:w-[40%] md:w-[65%] w-full h-[70vh]  relative  px-[3vw] py-[2vw]">
          <h2 className="text-5xl font-bold pb-10">Our Styles</h2>
          <p className="text-light text-lg text-gray-900">
            &quot;Never find yourself at a loss for styling ideas again. Our
            dedication lies in offering you a collection of elegant and
            contemporary designs that will not only meet your fashion needs but
            also ignite your creativity. Envision the possibilities;
            there&ldquo;s no need to overwhelm your dressmaker with requests.
            Let your wardrobe choices reflect your style effortlessly.&quot;
          </p>

          <h3 className="text-2xl font-bold py-5">
            Be royal in your own fashion
          </h3>
          <a href="#">
            <div className="w-12 h-12 mt-auto absolute bottom-6 rounded-full flex items-center justify-center border-2 border-black">
              <div className="w-5 h-5 ">
                <ArrowRightIcon />
              </div>
            </div>
          </a>
        </div>
      </section>
      {/* Section two */}
    </section>
  );
};

export default AboutSection;
