import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Button from "./Button";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Hero = () => {
  return (
    <section
      id="hero"
      className={`w-[calc(100%-200px)] h-auto md:h-screen pt-[150px] flex flex-col mb-20 md:mb-0 ${poppins.className} mx-auto`}
    >
      <div className="flex justify-center items-center">
        <div className="w-1/2 h-full flex justify-start items-start flex-col gap-7">
          <h1 className="text-[60px] font-[800] w-fit">
            Our <span className="text-[#43D0F7]">Services</span>
          </h1>
          <p className="text-[#e5e5e5] leading-[200%] text-[20px] font-light">
            At Chiraro, we are dedicated to providing top-notch digital
            marketing solutions tailored to elevate your brand and drive
            meaningful results. Explore our comprehensive range of services
            below
          </p>
        </div>
        <Image
          src={"/images/services.svg"}
          alt="Services"
          className="w-1/2 h-full"
          width={500}
          height={500}
        />
      </div>

      <Button right={false} href={"#services"} name={"Explore"} />
    </section>
  );
};

export default Hero;
