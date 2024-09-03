import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full">
      {/* Section One */}
      <section className="w-full h-screen bg-black px-[10vw] flex justify-start items-center">
        <div className="bg-white w-[40%] h-4/5 relative  px-[3vw] py-[2vw]">
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
      <div className="flex items-center justify-between gap-16 py-20 px-[10vw]">
        <div className="flex flex-col items-center">
          {/* Icon */}
          {/* Icon */}
          <h3 className="font-bold text-xl py-5">7 days free return</h3>
          <p className="text-center">
            At Ntomawura, your satisfaction is our top priority, and we want you
            to shop with confidence. Introducing our hassle-free 7 Days Free
            Return policy, designed to ensure your peace of mind with every
            purchase
          </p>
        </div>
        <div className="flex flex-col items-center">
          {/* Icon */}
          {/* Icon */}
          <h3 className="font-bold text-xl py-5">24 hour Delivery</h3>
          <p className="text-center">
            At Ntomawura, we understand that when you find the perfect piece,
            you want to flaunt it ASAP. Introducing our 24-Hour Express Delivery
            service, ensuring your latest fashion finds reach your doorstep in
            no time!
          </p>
        </div>
        <div className="flex flex-col items-center">
          {/* Icon */}
          {/* Icon */}
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
      <section className="w-full h-screen bg-gray-400 px-[10vw] flex justify-start items-center">
        <div className="bg-white w-[40%] h-[90%] relative  px-[3vw] py-[2vw]">
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
