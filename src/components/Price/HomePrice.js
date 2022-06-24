import React from "react";
import data from "../../data/data";
import { BsCheck } from "react-icons/bs";
import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

const HomePrice = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className=" text-center pb-12 text-main font-bold text-2xl md:text-4xl lg:text-4xl xl:text-5xl">
          Choose your web hosting plan
        </h1>
        <div className="div">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-10">
            {data.homePrice.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-3xl my-6 py-10 pl-6 xl:pl-12 pr-3 rounded-md"
              >
                <h2 className="uppercase  text-xl text-main lg:pr-32 font-semibold">
                  {item.name}
                </h2>
                <h3 className="pt-8 text-second">As low as</h3>
                <div className="flex items-end text-second">
                  <h4 className="text-5xl font-extrabold ">${item.price}</h4>
                  <span className="text-xl font-extrabold ">/mo</span>
                </div>
                <h5 className="pt-4 text-third text-lg">
                  {item.renewPrice}
                  /mo when you renew
                </h5>
                <button className=" my-8 flex justify-center items-center bg-four py-3.5 px-7 rounded-full uppercase text-sm hover:bg-second transition-all duration-500 text-white font-medium">
                  Get Start
                  <ArrowNarrowRightIcon className="w-6 h-5 ml-2" />
                </button>
                <div className="div">
                  <ul>
                    <li className="flex items-center pt-2">
                      <BsCheck className="text-2xl text-second mr-2" />{" "}
                      <p className="text-third text-base">{item.featureOne}</p>
                    </li>
                    <li className="flex items-center pt-2">
                      <BsCheck className="text-2xl text-second mr-2" />{" "}
                      <p className="text-third text-base">{item.featureTwo}</p>
                    </li>
                    <li className="flex items-center pt-2">
                      <BsCheck className="text-2xl text-second mr-2" />{" "}
                      <p className="text-third text-base">
                        {item.featureThree}
                      </p>
                    </li>
                    <li className="flex items-center pt-2">
                      <BsCheck className="text-2xl text-second mr-2" />{" "}
                      <p className="text-third text-base">{item.featureFour}</p>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePrice;
