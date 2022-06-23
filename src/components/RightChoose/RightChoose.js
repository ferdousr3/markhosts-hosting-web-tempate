import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Button from '../Button/Button';

const RightChoose = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="container mx-auto xl:px-24 ">
        <div className="">
          {/* left side */}
          <div className="first">
            {/* <div className="text-center text-white">
              <h1 className=" font-normal text-lg">
                Add more speed to your website.
              </h1>
              <h2 className=" pt-8 md:px-10 xl:px-40 font-bold text-3xl md:text-4xl lg:text-4xl xl:text-5xl">
                Your success in the industry is our 
              </h2>
            </div> */}
            <div className="md:flex items-center justify-around max-w-4xl mx-auto">
              <div className="text-white">
                <h1 className="font-bold text-3xl mt-4 ">
                  Still not sure what to choose?
                </h1>
                <p className='mt-2'>
                  Follow our helpful guide to find exactly what you're looking
                  for.
                </p>
              </div>
              <div className="md:ml-4 mt-4 md:mt-0">
                <button
                  onClick={() => navigate("/pricing")}
                  className="flex justify-center items-center bg-four py-4 px-10 rounded-lg  text-base hover:bg-main transition-all duration-500 text-white font-medium"
                >
                  Find Your Hosting
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightChoose;