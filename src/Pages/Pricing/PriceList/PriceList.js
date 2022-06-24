import React from "react";
import CustomLink from "./CustomLink";
import {Outlet } from "react-router-dom";

const PriceList = () => {
  return (
    <>
      <div className="container mx-auto xl:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-6">
          {/* router link  */}
          <div className="link  lg:col-span-2">
            <div className=" grid grid-cols-1 space-y-3 sm:space-y-0 md:space-y-0 md:grid-cols-4 lg:grid-cols-1 lg:space-y-3 ">
              <CustomLink to="/pricing">Shared Web Hosting</CustomLink>
              <CustomLink to="/pricing/cloudHosting">Cloud Hosting</CustomLink>
              <CustomLink to="/pricing/VpsHosting">VPS Hosting</CustomLink>
              <CustomLink to="/pricing/windowsVpsHosting">
                Windows VPS Hosting
              </CustomLink>
              <CustomLink to="/pricing/emailHosting">EmailHosting</CustomLink>
              <CustomLink to="/pricing/websiteBuilder">
                Website Builder
              </CustomLink>
              <CustomLink to="/pricing/ssl">SSL</CustomLink>
              <CustomLink to="/pricing/domains">Domains</CustomLink>
            </div>
          </div>
          {/* pages */}
          <div className=" lg:col-span-4  mt-16 lg:-mt-6">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceList;
