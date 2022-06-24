import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-10">
          <div className="col-span-4">
            <h1 className="text-main font-bold text-2xl md:text-4xl lg:text-4xl xl:text-5xl">
              Request a consultation
            </h1>
            <p className="text-third font-normal text-lg lg:text-base xl:text-xl pt-6 lg:pr-24">
              Schedule a call today and one of our experts will be happy to help
              you decide which professional service is ideal for your business
              and budget.
            </p>
          </div>
          <div className="col-span-4">
            <form>
              {/* name */}
              <div class="mb-6">
                <input
                  type="text"
                  id="name"
                  class="bg-gray-50 border border-ten text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:outline-none block w-full p-3 lg:p-4"
                  placeholder="Your Name"
                  required=""
                />
              </div>
              <div class="mb-6">
                <input
                  type="email"
                  id="email"
                  class="bg-gray-50 border border-ten text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:outline-none block w-full p-3 lg:p-4 "
                  placeholder="exmple@email.com"
                  required=""
                />
              </div>
              <div class="mb-6">
                <input
                  type="number"
                  id="email"
                  class="bg-gray-50 border border-ten text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:outline-none block w-full p-3 lg:p-4 "
                  placeholder="Phone Number"
                  required=""
                />
              </div>
              <div class="mb-6">
                <input
                  type="text"
                  id="email"
                  class="bg-gray-50 border border-ten text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:outline-none block w-full p-3 lg:p-4 "
                  placeholder="Best time to call"
                  required=""
                />
              </div>
              <div class="mb-6">
                <textarea
                  type="text"
                  id="email"
                  class="textarea bg-gray-50 border border-ten text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:outline-none block w-full p-3 lg:p-4 "
                  placeholder="Your Message "
                  required=""
                  cols='5'
                  rows='4'
                />
              </div>

              <button
                type="submit"
                class="flex justify-center items-center bg-main py-3.5 px-10 rounded-full uppercase text-sm hover:bg-second transition-all duration-500 text-white font-medium"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
