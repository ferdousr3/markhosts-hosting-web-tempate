import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import data from "../../data/data";

const Contacts = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* phone */}
          <div className=" shadow-3xl bg-white py-10 px-10 min-h-[12rem] ">
            <div className="flex items-center ">
              <FaPhoneAlt className="text-second mr-4 text-2xl" />
              <h1 className="text-2xl text-main uppercase font-bold">Phone</h1>
            </div>
            <div className="pt-4 ">
              <h2 className="text-second text-2xl hover:text-main transition-colors duration-300 pb-2 ">
                +800 4759 1232
              </h2>
              <h2 className="text-second text-2xl hover:text-main transition-colors duration-300  ">
                +800 4759 1232
              </h2>
            </div>
          </div>
          {/* address */}
          <div className=" shadow-3xl bg-white py-10 px-10 min-h-[12rem] ">
            <div className="flex items-center ">
              <FaMapMarkerAlt className="text-second mr-4 text-2xl" />
              <h1 className="text-2xl text-main uppercase font-bold">
                Address
              </h1>
            </div>
            <div className="pt-4 ">
              <h2 className="text-third text-lg hover:text-main transition-colors duration-300 pb-2 ">
                732/21 Second Street, Manchester, King Street, Kingston United
              </h2>
            </div>
          </div>
          {/* email */}
          <div className=" shadow-3xl bg-white py-10 px-10 min-h-[12rem] ">
            <div className="flex items-center ">
              <FaEnvelope className="text-second mr-4 text-2xl" />
              <h1 className="text-2xl text-main uppercase font-bold">Email</h1>
            </div>
            <div className="pt-4 ">
              <h2 className="text-third text-lg hover:text-main transition-colors duration-300 pb-2 ">
                markhost.co@demolink.org
              </h2>
            </div>

            <div className="flex space-x-4 mt-2 ">
              {data.social.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className=" text-xl text-second hover:text-four transition-colors duration-300  "
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
