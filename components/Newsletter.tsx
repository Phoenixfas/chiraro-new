import Image from "next/image";
import React from "react";

const Newsletter = () => {
  return (
    <section
      id="offers"
      className="w-full items-center justify-center flex relative"
    >
      <div className="w-[calc(100%-200px)]  pt-[250px] pl-[80px] flex mb-20 md:mb-0 items-start justify-center">
        <div className="w-[100%] px-12 flex justify-center items-center rounded-lg relative py-10">
          <div className="rect"></div>
          <div className="w-1/2 p-8 flex flex-col gap-3">
            <div>
              <h1 className="text-[46px] tracking-wide font-semibold leading-[105%]">
                Subscribe to our{" "}
                <span className="text-[#5FE0F9] block pb-12">Newsletter</span>
              </h1>
            </div>

            <form className="flex flex-col gap-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 pl-6 rounded-lg mb-4 input duration-500 text-gray-500"
              />
              <button className="p-3 button-bg text-white rounded-lg button overflow-hidden">
                Subscribe
              </button>
            </form>
          </div>
          <div className="w-1/2">
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
