import React from "react";

const PageTitle = ({ title, description }) => {
  return (
    <>
      <div className=" pt-8 md:pt-14 lg:pt-20">
        <div className="container mx-auto">
          <h1 className=" pb-6 text-main font-bold text-2xl md:text-4xl lg:text-4xl xl:text-7xl">
            {title}
          </h1>
          <p className="text-third font-normal text-lg lg:text-base xl:text-xl">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
