import React from "react";
import { useNavigate } from "react-router-dom";
import data from "../../data/data";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

const HostingFeatures = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto">
        <div className=" max-w-4xl ">
          <h1 className="text-main text-3xl font-bold xl:text-5xl xl:font-bold xl:pr-72">
            Built for lightning speed
          </h1>
          <p className="max-w-3xl pt-8 text-third font-normal text-lg lg:text-base xl:text-xl ">
            Choose the diversity of services for all your needs. Be sure in the
            high-speed work of your website. Our plans are the best option for
            different kinds of websites. And a mix of fastest speed and low
            price is incredible.
          </p>
        </div>
        <div className="details max-w-4xl xl:ml-auto mt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-10">
            {data.features.map((feature) => (
              <div
                key={feature.id}
                className="pt-10 pb-8 px-10 rounded-sm border border-eight hover:border-white hover:shadow-3xl  duration-500 transition-all "
              >
                <h1 className="text-main text-xl  font-bold hover:text-second transition-colors duration-300 ">{feature.name}</h1>
                <p className="max-w-3xl pt-4 text-third font-normal text-lg xl:pr-16">
                  {feature.description}
                </p>
                <button
                  className="mt-8 block   md:ml-auto "
                  onClick={() => navigate("/contact")}
                >
                  <ArrowNarrowRightIcon className="w-6 md:ml-auto text-second transition-colors duration-300 hover:text-four " />
                  
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HostingFeatures;
