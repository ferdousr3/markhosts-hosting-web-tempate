import { FaSearch } from "react-icons/fa";

const FindDomain = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className=" max-w-3xl mx-auto ">
          <h1 className="text-main text-3xl font-bold xl:text-5xl xl:font-bold xl:pr-72 ">
            Find the perfect domain name, for free
          </h1>
          <div className="flex items-center mt-6 ">
            <input
              className="w-full  bg-white px-5 py-3 lg:px-8 lg:py-4 border border-six focus:outline-none rounded-bl-full  rounded-tl-full"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Domain Name"
            />
            <button className="flex xl:w-60 items-center bg-seven rounded-br-full  rounded-tr-full hover:bg-second py-4 md:py-4 lg:py-5 xl:py-4 pr-2 pl-2 md:pr-6 md:pl-6 ">
              <FaSearch className=" w-12 md:w-16 xl:w-24  block xl:hidden    text-white transition-colors duration-300 " />
              <span className="hidden xl:block text-white font-semibold uppercase" >Search Domain</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindDomain;
