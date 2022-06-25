import React, { useState } from 'react';
import HeaderPageTitle from '../../../components/PageTitle/HeaderPageTitle';
import data from '../../../data/data';
import DataRow from '../DataRow';
import PricingSubPageTitle from "../../../components/PageTitle/PricingSubPageTitle";

const Domains = () => {
  const { monthly, annual } = data.packages;
  const [state, setState] = useState({
    active: "monthly",
    pricingPlan: monthly,
  });

  const handlePricingPlan = (plan) => {
    if (plan === "annual") {
      setState({
        ...state,
        active: "annual",
        pricingPlan: annual,
      });
    } else {
      setState({
        ...state,
        active: "monthly",
        pricingPlan: monthly,
      });
    }
  };

  return (
    <>
      {/* SEO page Title */}
      <HeaderPageTitle title="Domains" />
      <div className="border-b border-b-[#d0d3f0] pb-6 flex-row justify-center items-center lg:flex lg:justify-between lg:items-center ">
        <PricingSubPageTitle title="Domains" />
        <div className="bg-[#f7eefe] px-2  rounded-full max-w-[16.5rem] mt-6 lg:mt-0 mx-auto lg:mx-0">
          <button
            className={`${
              state.active === "monthly" ? "bg-second text-white" : "text-black"
            } m-2 uppercase text-sm font-bold py-3 px-6 rounded-full transition-colors duration-300 `}
            type="button"
            aria-label="Monthly"
            onClick={() => handlePricingPlan("monthly")}
          >
            Monthly
          </button>
          <button
            className={`${
              state.active === "annual" ? "bg-second text-white" : "text-black"
            } m-2 uppercase text-sm font-bold py-3 px-6 rounded-full transition-colors duration-300 `}
            type="button"
            aria-label="Annual"
            onClick={() => handlePricingPlan("annual")}
          >
            Annual
          </button>
        </div>
      </div>
      <div className=" overflow-x-auto sm:rounded-sm">
        <table className="w-full text-sm text-left  ">
          <thead className="text-sm  text-third md:text-base   ">
            <tr>
              {data.packagesFeatures.map((item) => (
                <th key={item.id} className="px-4 py-6 md:pb-6">
                  {item.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="my-24 shadow-3xl  ">
            {state.pricingPlan.map((plan) => (
              <DataRow key={plan.id} plan={plan} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Domains;