import React from "react";
import features from "../../images/features/featurse.png";
import FeaturesButton from "../Button/FeaturesButton";

const FeaturesLeftTitle = () => {
  return (
    <section>
      <div className="container mx-auto    mt-[-80px] ">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 pt-14 bg-white lg:px-32  gap-8 shadow-3xl">
          <div className="col-span-1 xl:col-span-2 pl-4 sm:pl-0 ">
            <h1 className="text-main font-bold text-2xl md:text-4xl lg:text-5xl">
              WEB HOSTING
            </h1>
            <p className="text-third font-normal text-lg lg:text-2xl py-2.5">
              Perfect for small to medium websites.
            </p>
            <div className="pt-4">
              <h6 className="text-second"> As low as</h6>
              <p className="">
                <span className="text-second text-5xl font-extrabold ">
                  $0.99
                </span>
                <span className="text-second text-2xl font-semibold ">/mo</span>
              </p>
            </div>
            <div className="pt-6">
              <FeaturesButton text="get started" route="products" />
            </div>
          </div>
          <div className="col-span-1 xl:col-span-2  flex justify-center items-center ">
            <img src={features} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesLeftTitle;
