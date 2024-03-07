import Image from "next/image";
import React from "react";

const Newsletter = () => {
  return (
    <section
      id="offers"
      className="w-full items-center justify-center flex relative"
    >
      <div className="px-5 sm:px-[50px] lg:px-[200px] pt-[100px] lg:pt-[250px] pl-5 lg:pl-[80px] flex items-center justify-center">
        <div className="w-full px-0 sm:px-12 flex flex-col md:flex-row justify-center items-center rounded-lg relative py-10">
          <div className="rect"></div>
          <div className="w-full md:w-1/2 p-8 flex flex-col gap-3">
            <div>
              <h1 className="text-[35px] sm:text-[46px] text-center md:text-start tracking-wide font-semibold leading-[105%]">
                Subscribe to our{" "}
                <span className="text-[#5FE0F9] block pb-12">Newsletter</span>

              </h1>
            </div>

            <form className="flex flex-col gap-1">
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 pl-6 rounded-lg mb-4 input duration-500 text-gray-500"
              />
              <input
                type="email"
                placeholder="What's on your mind"
                className="p-3 pl-6 rounded-lg mb-4 input duration-500 text-gray-500"
              />
              <button className="p-3 button-bg text-white rounded-lg button overflow-hidden">
                Subscribe
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/images/newsletter.svg"
              height={500}
              width={500}
              alt="newsletter"
              className="w-[90%] h-[90%] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
