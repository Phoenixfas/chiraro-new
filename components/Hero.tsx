import React from "react";
import Image from "next/image";
import Button from "./Button";


const Hero = () => {
  return (
    <section
      id="hero"
      className={`w-[85%] sm:w-[calc(100%-200px)] pt-[150px] flex flex-col mb-10 lg:mb-0 mx-auto`}
    >
      <div className="flex justify-center items-center flex-col-reverse lg:flex-row gap-16 lg:gap-0">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center lg:items-start flex-col gap-7 text-center lg:text-start">
          <h1 className="text-[50px] sm:text-[60px] font-[800] w-fit">
            Our <span className="text-[#43D0F7]">Services</span>
          </h1>
          <p className="text-[#e5e5e5] leading-[200%] text-[20px] font-light">

            Chiraro is your one-stop shop for exceptional digital marketing solutions. We specialize in crafting personalized strategies to elevate your brand and achieve tangible results.<br /><br /> Explore our extensive range of services below to discover how we can help you reach your marketing goals.
          </p>
        </div>
        <Image
          src={"/images/services.svg"}
          alt="Services"
          className="w-full lg:w-1/2 h-fit sm:h-[400px] flex justify-center items-center"
          width={500}
          height={400}
        />
      </div>

      <Button right={false} href={"#services"} name={"Explore"} className={"pt-10"} />
    </section>
  );
};

export default Hero;
