import Link from "next/link";
import React from "react";
import Hero3d from "./Hero3d";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <div
      id="hero"
      className="w-full min-h-screen md:w-[calc(100%-50px)] md:h-screen pt-[150px] flex justify-center items-center flex-col-reverse md:flex-row"
    >
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start text-center md:text-start px-10 md:pl-20 md:pr:10">
        <h1 className="lg:text-[90px] lg:leading-[6rem] md:text-6xl md:leading-[5.25rem] text-[2.5rem] leading-[3rem] font-bold mb-10 tracking-[widest]">
          GROW YOUR <span className="text-[#43D0F7]">DIGITAL</span> PRESENCE
        </h1>
        <p className="text-[#c9c9c9] text-[24px] font-light md:hidden block my-5">
          Elevating brands through innovative strategies and targeted campaigns. Your vision, our expertise.
        </p>
        {/* <p className='sm:text-2xl sm:leading-10 text-[1rem] leading-8 text-[#aaa] mb-10'>Innovation guides us, crafting digital excellence to propel your business higher.</p> */}
        <Button right={true} href={"/services"} name={"Explore Services"} />
      </div>
      <div className="relative md:w-1/2 w-full h-full flex justify-center items-center md:pr-10">
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] bg-[radial-gradient(#43D0F755,_transparent)] blur-[100px] rounded-full'></div>
        <Hero3d />
      </div>
    </div>
  );
}
