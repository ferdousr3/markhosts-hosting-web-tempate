import React from "react";
import FooterTitle from "../Title/FooterTitle";
import FooterLink from "./FooterLink";
import { PaperAirplaneIcon } from "@heroicons/react/outline";
import  data  from "../../data/data";

const Footer = () => {
 
  const date = new  Date()
  const year = date.getFullYear()

  return (
    <footer className="bg-black pt-20 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-12 gap-8  text-white">
          <div className="col-span-2">
            <h1 className="text-white font-bold text-3xl">MarkHost</h1>
          </div>
          {/* hosting */}
          <div className="col-span-2">
            <FooterTitle title="hosting" />
            <FooterLink
              linkTitle="Web Hosting"
              path="contact"
              linkTitle1="VPS Hosting"
              path1="contact"
              linkTitle2="Cloud Hosting"
              path2="contact"
              linkTitle3="WordPress Hosting"
              path3="contact"
              linkTitle4="Email Hosting"
              path4="contact"
            />
          </div>
          {/* DOMAINS */}
          <div className="col-span-2">
            <FooterTitle title="DOMAINS" />
            <FooterLink
              linkTitle="Domain Checker"
              path="contact"
              linkTitle1="Domain Transfer"
              path1="contact"
              linkTitle2="Free Domain"
              path2="contact"
              linkTitle3="XYZ Domain"
              path3="contact"
              linkTitle4="Buy Domain Name"
              path4="contact"
              linkTitle5="Whois Checker"
              path5="contact"
            />
          </div>
          {/* INFORMATION */}
          <div className="col-span-2">
            <FooterTitle title="INFORMATION" />
            <FooterLink
              linkTitle="Server Status"
              path="contact"
              linkTitle1="Affiliate Program"
              path1="contact"
              linkTitle2="Payment Methods"
              path2="contact"
              linkTitle3="Pricing"
              path3="contact"
            />
          </div>
          <div className="col-span-4">
            <FooterTitle title="SING UP FOR OUR NEWSLETTER" />
            <div className="flex items-center ">
              <input
                className="bg-[#151515] px-5 py-3 rounded-bl-full focus:outline-none  rounded-tl-full focus:border-[#151515] "
                type="email"
                name="email"
                id="email"
              />
              <button>
                <PaperAirplaneIcon className=" w-12 md:w-16 bg-[#151515] py-4 pr-4 pl-4 md:pr-6 md:pl-6 rounded-br-full  rounded-tr-full   text-white hover:text-four " />
              </button>
            </div>
            <div className="mt-6 ">
              <FooterTitle title="FIND US ON SOCIAL MEDIA" />
              <div className="flex space-x-4 -mt-4 ">
                {data.social.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className=" text-xl hover:text-four transition-colors duration-300  "
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="pt-14 pb-6">
          <h6 className="text-five text-sm" >© {year} MarkHost All Rights Reserved.</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
