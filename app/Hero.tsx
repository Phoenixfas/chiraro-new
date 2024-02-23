import Link from "next/link";
import React from "react";
import Hero3d from "./Hero3d";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <div
      id="hero"
      className="w-[calc(100%-200px)] h-auto md:h-screen pt-[150px] flex flex-col-reverse md:flex-row mb-20 md:mb-0 "
    >
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start text-center md:text-start px-10 md:pl-10">
        <h1 className="lg:text-[90px] lg:leading-[6rem] md:text-6xl md:leading-[5.25rem] text-[2.5rem] leading-[3rem] font-bold mb-10">
          GROW YOUR <span className="text-[#43D0F7]">DIGITAL</span> PRESENCE
        </h1>
        {/* <p className='sm:text-2xl sm:leading-10 text-[1rem] leading-8 text-[#aaa] mb-10'>Innovation guides us, crafting digital excellence to propel your business higher.</p> */}
        <Button right={true} href={"/services"} name={"Explore"} />
      </div>
      <div className="md:w-1/2 w-full flex justify-center items-center md:pr-10">
        {/* <Hero3d /> */}
      </div>
    </div>
  );
}
