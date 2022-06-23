import React from "react";
import FeaturesButton from "../Button/FeaturesButton";

const SpeedUp = () => {
  return (
    <>
      <div className="container mx-auto xl:px-24">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          {/* left side */}
          <div className="">
            <div className=" py-8 px-6 xl:px-8  border bg-[#e9f8ff ] text-main border-eight shadow-3xl max-w-sm">
              <h1 className="text-lg font-semibold  pb-6">
                Speed Performance score
              </h1>
              <div className="flex">
                {/* page speed */}
                <div className="div">
                  <h2 className="text-sm  font-bold ">Page speed Score </h2>
                  <div className="flex items-center ">
                    <p className="text-4xl font-bold pt-3">A</p>
                    <p className="text-xl ml-2 mt-4 ">99%</p>
                  </div>
                </div>
                {/* load time  */}
                <div className="ml-6">
                  <h2 className="text-sm  font-bold ">Load Time</h2>
                  <div className="flex items-center ">
                    <p className=" text-3xl  pt-3">0.122</p>
                    <p className="text-xl  mt-5 ">s</p>
                  </div>
                </div>
              </div>

              {/* YSlow score */}
              <div className="mt-6">
                <h2 className="text-sm  font-bold ">YSlow Core</h2>
                <div className="flex items-center ">
                  <p className=" text-4xl font-bold pt-3">A</p>
                  <p className="text-xl ml-2 mt-4 ">99%</p>
                </div>
              </div>
              {/* Caching*/}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs sm:text-sm mr-3 font-medium">
                    Browser Caching
                  </p>
                  <div className="w-32 h-4 bg-four  ">
                    <div className="w-[90%] h-full bg-main"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between  mb-3">
                  <p className=" text-xs sm:text-sm mr-3 font-medium">
                    Cache Validator
                  </p>
                  <div className="w-32 h-4 bg-four  ">
                    <div className="w-[85%] h-full bg-main"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs sm:text-sm mr-3 font-medium">
                    Minify JavaScript
                  </p>
                  <div className="w-32 h-4 bg-four   ">
                    <div className="w-[93%] h-full bg-main"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right side  */}
          <div className="flex items-center">
            <div className="div">
              <h1 className="text-main font-bold text-2xl md:text-4xl lg:text-4xl xl:text-5xl">
                Get a website quickly and easily{" "}
              </h1>
              <p className="text-third font-normal text-lg pt-6">
                Choose the diversity of services for all your needs. Be sure in
                the high-speed work of your website. Our plans are the best
                option for different kinds of websites. And a mix of fastest
                speed and low price is incredible.
              </p>
              <div className="mt-6">
                <FeaturesButton text="get Start" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeedUp;
