import React from 'react';

const PricingSubPageTitle = ({title}) => {
  return (
    <>
      <h1 className="text-main font-bold text-2xl md:text-4xl lg:text-4xl xl:text-5xl border-b border-b-[#d0d3f0] pb-10">
        {title}
      </h1>
    </>
  );
};

export default PricingSubPageTitle;